(function ($) {
    $.fn.watch = function (callback) {
        return this.each(function () {
            //缓存以前的值
            $.data(this, 'originVal', $(this).val());
            //event
            $(this).on('keyup', function () {
                var originVal = $(this, 'originVal');
                var currentVal = $(this).val();

                if (originVal !== currentVal) {
                    $.data(this, 'originVal', $(this).val());
                    callback(currentVal);
                }
            });
        });
    }
    $.validate = function (id, opts, ss) {
        var rules = opts;
        var len = opts.length;
        var mod = {} || mod;
        var list = [];

        function myValidate(rules) {

            $.each(rules, function () {
                list.push(this.name);
                //初始化数据
                mod[this.name] = "";
                var ru = this.name;
                mod[ru + "_rules"] = this.rules;
                mod[ru + "_Tips"] = "";

                if (ru.indexOf('#') == -1) {
                    var ele = $("#" + id + " input[name=" + ru + "]");
                } else {
                    var ele = $("#" + id + " " + ru);
                }
                var myRule = mod[ru + "_rules"];
                var val = ele.val();
                //增加属性
                ele.data("validate", false);
                //功能函数
                function tip(str) {
                    ele.removeClass("input-text-hover").removeClass("input-text-error");
                    if (str) {
                        ele.addClass("input-text-" + str);
                    }
                    ele.siblings(".error-tips").remove();
                    ele.siblings(".right-tips").remove();
                    ele.siblings(".default-tips").remove();
                    ele.parent().append(mod[ru + "_Tips"]);
                }

                function error() {
                    ele.data("validate", false);
                    mod[ru + "_Tips"] = "<span class='error-tips'>" + myRule["errorMsg"] + "</span>";
                    tip("error");
                }

                function sucess() {
                    ele.data("validate", true);
                    mod[ru + "_Tips"] = "<span class='right-tips'>" + myRule["sucessMsg"] + "</span>";
                    tip();
                }

                function required() {
                    ele.data("validate", false);
                    mod[ru + "_Tips"] = "<span class='error-tips'>" + myRule["requireMsg"] + "</span>";
                    tip("error");
                }

                function equalTo() {
                    ele.data("validate", false);
                    mod[ru + "_Tips"] = "<span class='error-tips'>" + myRule["equalMsg"] + "</span>";
                    tip("error");
                }

                function romoteTo(data) {
                    ele.data("validate", false);
                    if (myRule["romoteMsg"] == 'custom') {
                        mod[ru + "_Tips"] = "<span class='error-tips'>" + data + "</span>";
                    } else {
                        mod[ru + "_Tips"] = "<span class='error-tips'>" + myRule["romoteMsg"] + "</span>";
                    }
                    tip("error");
                }

                if (ele.attr("type") == "checkbox") {
                    ele.data("filter", function () {
                        var check = ele.filter(":checked").length;
                        if (check >= 1) {
                            sucess();
                            return true;
                        }
                        error();
                        return false;
                    });
                    ele.change(function () {
                        ele.data("filter")();
                    });
                    return true;
                }
                ele.watch(function (a) {
                    var isTrue = new RegExp(myRule.regx).test(a);
                    if (isTrue) {
                        if (myRule["equalTo"]) {
                            if (myRule["equalTo"].val() == a) {
                                sucess();
                            } else {
                                equalTo();
                            }
                            return false;
                        } else {
                            sucess();
                        }
                    } else {
                        mod[ru + "_Tips"] = "<span class='default-tips'>" + mod[ru + "_rules"]["defaultMsg"] + "</span>";
                        tip("hover");
                    }
                });
                ele.data("filter", function () {
                    ele.removeClass("input-text-hover");
                    var value = ele.val().replace(/\s+/g, "");
                    var isTrue = new RegExp(myRule.regx).test(value);
                    if (value.length == 0) {
                        required();
                        return false;
                    }
                    if (value.length > 0 && !isTrue) {
                        error();
                        return false;
                    }
                    if (isTrue) {
                        sucess();
                    }

                    //ajax校验
                    if (isTrue && myRule["romote"] && myRule["requirePath"]) {
                        ele.data("validate", false);
                        $.ajax({
                            url: myRule["requirePath"],
                            type: 'GET',
                            async: false,
                            dataType: 'json',
                            data: ru + "=" + value,
                            success: function (data) {
                                if (data.status == 1) {
                                    sucess();
                                } else {
                                    try {
                                        romoteTo(data.data);
                                    } catch (e) {
                                        romoteTo();
                                    }
                                }
                                myRule["callback"](data.data);
                            }
                        });
                        return false;
                    }
                    if (myRule["equalTo"]) {
                        if (myRule["equalTo"].val() == value) {
                            sucess();
                        } else {
                            equalTo();
                        }
                        return false;
                    }
                    return true;
                });
                ele.blur(ele.data("filter"));
                ele.focus(function () {
                    mod[ru + "_Tips"] = "<span class='default-tips'>" + mod[ru + "_rules"]["defaultMsg"] + "</span>";
                    tip("hover");
                });

            });
            if (ss) {
                var ssa = ss;
                ss = function () {
                    var stop = false;
                    var filter = true;
                    $.each(list, function () {
                        if (this.indexOf('#') == -1) {
                            var self = $("#" + id + " input[name=" + this + "]");
                        } else {
                            var self = $("#" + id + " " + this);
                        }
                        if (!self.data("validate") && self.data("filter")) {
                            var aa = self.data("filter")();
                            if (!aa && filter) {
                                filter = false;
                            }
                        }
                    });
                    if (filter) {
                        ssa();
                    } else {
                        $.each(list, function () {
                            var self = $("#" + id + " input[name=" + this + "]");
                            if (!self.data("validate")) {
                                stop = true;
                                return false;
                            }
                        });
                        if (!stop) {
                            ssa();
                        }
                    }

                }
            }
        }

        myValidate(opts);
        return ss;
    };
}(jQuery));