/***
    liaojun.core.js
    20170306
**/

;
(function () {
    var core = {
        date: 20170306,
        version: window.F_VERSION || 2017,
        debug: window.F_DEBUG == 0 ? false : true,
        api_host: 'http://127.0.0.1:4000'
    };
    // 配置
    core.config = {
        AJAX_TIMEOUT: 10000, // ajax requst timeout
        MESSGAE_THEME: 'blue', // message notice theme
    };

    window.JS_ROOT = '/public/js/';
    window.JS_MODULES = '';
    // data model
    //防止链接的跳转
    $(document).delegate('.btn', 'click', function (e) {
        if (this.tagName.toLowerCase() == 'a' && this.href == "#") {
            e.preventDefault();
        }
    });

    $(document).delegate('.tab', 'click', function (e) {
        if (this.tagName.toLowerCase() == 'a' && this.href == "#") {
            e.preventDefault();
        }
    });
    core.VR = {};
    core.VR.routeConfig = function(url) {
        //根据url读取指定文件中的模板
        var t = url.replace(/\//g, '-');
        var folder = t.split('-');
        var file = folder[0]+'/template/'+folder[1]+'.html';
        return {
                    template : '<h1>hello</h1>'
                }
        // return {
        //             template:content
                // }
    };

    core.sendMessage = function (msg,red, e) {
        if (red) {
            var $dialog = $('<div class="message-box red"></div>');
        } else {
            var $dialog = $('<div class="message-box blue"></div>');
        }
        
        $dialog.append(msg);
        if (e) {
            //禁止冒泡
            e.stopPropagation();
        }
        $('body').append($dialog);
        window.setTimeout(function () {
            $dialog.remove();
        }, 3000);
    };

    core.BoxManage = function () {

        var defaultOptions = {
            "wrapId": 'vanhtink-win' + Math.random() * 10000,
            "className": "r-popup-box",
            "title": "标题",
            "header": '',
            "body": '',
            "footer": '',
            "overflow": 'auto',
            "keyEsc": false,
            "withMask": true,
            "dragable": false,
            "resizable": false,
            "posCenter": true,
            "posAdjust": true,
            "fixed": false,
            "maskClose": false,
            "template": '../common/window',
            "fn": function () {},
            "contents": '',
            "multiline": false,
            "text": false,
            'button': {
                'ok': {
                    'enabled': true,
                    'text': '确定',
                },
                'cancel': {
                    'enabled': false,
                    'text': '取消',
                }
            }
        };

        var options = {};

        $mask = $('<div class="mask"></div>')
        $box = $('<div class="r-popup-box"></div>');
        $alertBox = $('<form action="" class="alert-box win-form"></form>');
        return {
            init: function () {
                var me = this;
                this.loadTemplate();


            },

            loadScript: function () {

                var url = JS_ROOT + options.name.replace(/\_/g, '-') + '.js' + '?v=' + core.Helper.random();

                requirejs([JS_ROOT + options.name.replace(/\_/g, '-') + '.js'], function () {
                    //$box.attr('ng-controller','ClassGroupCrateWindowCtrl');
                });

                $.getScript(url, function (data, textStatus, jqxhr) {
                    console.log(url);
                });

            },

            loadTemplate: function () {
                var me = this;
                if (options.data) {
                    options.name += '?' + serialize(options.data);

                }
                $.get(options.name, function (result) {
                    if (result) {
                        $box.append(result);
                        //me.loadScript();
                        me.bind();

                    }

                });
            },

            bind: function () {
                var me = this;
                $box.find('.btn-close').on('click', function (e) {
                    e.preventDefault();
                    me.hide();
                });

            },

            initAlertBox: function () {
                var me = this;
                $alertBox.empty();
                if (options.text) {

                    var html = '<div class="m-form text-left"><div class="form-group">';
                    if (options.multiline) {
                        html += '<textarea autofocus class="js-win-ask-text" placeholder="说点什么" style="width:90%">' + options.contents + '</textarea>';
                    } else {
                        html += '<input autofocus class="js-win-ask-text"  style="width:90%" value="' + options.contents + '">';
                    }

                    html += '</div></div>';
                    $wrap = $('<div class="wrap"></div>').html(html);

                } else {

                    $wrap = $('<div class="wrap"></div>').html(options.msg);
                    $wrap.append('<input type="hidden" name="noname">');
                }
                $btnClose = $('<a href="#" class="icon icon-cross2 btn-close"></a>');
                $hd = $('<div class="hd"></div>').append(options.title, $btnClose);

                var $ft = this.addButtons();
                // form not autofocus
                //$alertBox.attr('action','fid' + core.Helper.random());
                setTimeout(function () {
                    $alertBox.find('input[type="text"]').first().focus();
                }, 100);
                $alertBox.append($hd, $wrap, $ft);
                $btnClose.on('click', function (e) {
                    e.preventDefault();
                    me.hide();
                });

            },


            addButtons: function () {
                var $ft = $('<div class="ft"></div>');
                var btnConfig = options['button'];
                var me = this;
                var fn = options['fn'];
                if (btnConfig['ok']['enabled']) {

                    $ok = $(' <button type="submit" class="btn btn-primary">' + btnConfig['ok']['text'] + '</button>');
                    $ft.append($ok);
                    if (options.text) {
                        $ok.on('click', function (e) {
                            e.preventDefault();
                            me.disable = false;
                            var text = $alertBox.find('.js-win-ask-text').val();
                            if (fn !== undefined) {
                                $.when(fn(text, me)).then(function (result) {
                                    if (!me.disable) {
                                        me.hide();
                                    }
                                });

                            } else {
                                me.hide();
                            }
                        });
                    } else {
                        $ok.on('click', function (e) {
                            e.preventDefault();
                            me.disable = false;
                            if (fn !== undefined) {
                                $.when(fn(options, me)).then(function (result) {
                                    if (!me.disable) {
                                        me.hide();
                                    }
                                });
                            } else {
                                me.hide();
                            }
                        });
                    }
                }

                if (btnConfig['cancel']['enabled']) {
                    $cancel = $('<button type="button" class="btn btn-default">' + btnConfig['cancel']['text'] + '</button>');
                    $cancel.on('click', function () {
                        me.hide();
                    });
                    $ft.append($cancel);
                }






                return $ft;
            },

            alert: function (title, msg, fn) {
                options.title = title;
                options.msg = msg;

                options = $.extend({}, defaultOptions, options);
                options['button']['cancel']['enabled'] = false;
                options['fn'] = fn;
                this.initAlertBox();
                $('body').append($mask);
                $('body').append($alertBox);
                $alertBox.addClass('show');
            },

            confirm: function (title, msg, fn) {
                options = $.extend({}, defaultOptions, {
                    'title': title,
                    'msg': msg,
                    'fn': fn
                });
                options['button']['cancel']['enabled'] = true;
                this.initAlertBox(fn);
                $('body').append($mask);
                $('body').append($alertBox);
                $alertBox.addClass('show');
            },

            ask: function (title, source, fn, args) {
                if (!args) {
                    args = {};
                }
                args.title = title;
                args.text = true;
                args.msg = core.getTemplate(source);
                args.fn = fn;

                options = $.extend({}, defaultOptions, args);
                this.initAlertBox(fn);
                $('body').append($mask);
                $('body').append($alertBox);
                $alertBox.addClass('show');
            },



            show: function (args, $scope) {
                options = args;
                var name = options.name;
                options.name = camelToUnderline(args.name);
                var a = options.name.split('_');
                var box_url = '/' + a[0] + '/' + a.splice(1, a.length - 1).join('_') + '/view';
                options.name = box_url;
                mix(options, defaultOptions);

                if (!options.name) {
                    return;
                }
                if (options.data) {
                    core.WatchVariableMessage.create(options.name, options.data);
                }
                $box.addClass(core.generateClassName(name));
                $('body').append($mask);
                $('body').append($box);
                $box.html('');
                $box.append('<a href class="btn btn-close">关闭</a>')
                $box.addClass('show');

                this.init();


            },


            hide: function () {
                if (options.enable) {
                    return;
                }
                $box.remove();
                $alertBox.remove();
                $mask.remove();
            }



        };
    }();



        core.LoadingSpinner = (function () {

        var $spinner = $('<div class="spinner-wrap"><svg class="spinner" width="33px" height="33px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><circle class="path" fill="none" stroke-width="5" stroke-linecap="round" cx="33" cy="33" r="30"></circle></svg></div>');
        //$spinner.css('display','none');
        var defaultOptions = {
            parentWrap: false,
            text: '加载中...',
            style: 'svg'

        };
        var showStatus = false;
        return {
            //
            show: function (options) {
                if (this.isShow) {
                    this.hide();
                }
                var options = $.extend({}, defaultOptions, options);

                if ($(options.parentWrap).length == 0) {
                    $spinner = $('<div class="g-loading"><div class="spinner-wrap"><div class="spinner-text">' + options.text + '</div><svg class="spinner" width="33px" height="33px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><circle class="path" fill="none" stroke-width="5" stroke-linecap="round" cx="33" cy="33" r="30"></circle></svg></div></div>');
                } else {
                    $spinner = $('<div class="loading-mask"><div class="spinner-wrap"><div class="spinner-text">' + options.text + '</div><svg class="spinner" width="33px" height="33px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><circle class="path" fill="none" stroke-width="5" stroke-linecap="round" cx="33" cy="33" r="30"></circle></svg></div></div>');
                }
                if (options.style == 'gif') {
                    $spinner = $('<div class="loading-mask"></div>');
                    $spinner.css('background', 'url(data:image/gif;base64,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) no-repeat center center');
                }

                if ($(options.parentWrap).length == 0) {
                    $('.components').append($spinner);
                    return;
                }
                $(options.parentWrap || '.components').append($spinner);
                showStatus = true;
                return;
                // 1s 认为刷新可以忽略
                setTimeout(function () {
                    $(options.parentWrap || '.components').append($spinner);
                }, 200);

            },

            isShow: function () {
                return showStatus;
            },

            hide: function () {
                showStatus = false;
                $spinner.remove();
            }
        };

    })();

    core.Helper = {


        // 生成随机数字字符串
        random: function () {
            return ((new Date()).getTime() + Math.floor(Math.random() * 9999));
        },

        getQueryParams: function (q) {
            var url = location.href;
            q = q.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regexS = "[\\?&]" + q + "=([^&#]*)";
            var regex = new RegExp(regexS);
            var results = regex.exec(url);
            return results == null ? null : results[1];
        }


    };
    /**
     * 将源对象的属性并入到目标对象
     * @method mix
     * @static
     * @param {Object} des 目标对象
     * @param {Object} src 源对象
     * @param {boolean} override (Optional) 是否覆盖已有属性。如果为function则初为混合器，为src的每一个key执行 des[key] = override(des[key], src[key], key);
     * @returns {Object} des
     */
    var mix = function (des, src, override) {
        if (typeof override == 'function') {
            for (var i in src) {
                des[i] = override(des[i], src[i], i);
            }
        } else {
            for (i in src) {
                //这里要加一个des[i]，是因为要照顾一些不可枚举的属性
                if (override || !(des[i] || (i in des))) {
                    des[i] = src[i];
                }
            }
        }
        return des;
    };

    var unserialize = function (serializedString) {
        if (!serializedString) {
            return {};
        }

        var str = decodeURI(serializedString);
        var pairs = str.replace(/\+/g, ' ').split('&');
        var obj = {},
            p, idx;
        for (var i = 0, n = pairs.length; i < n; i++) {
            p = pairs[i].split('=');
            idx = p[0];
            if (obj[idx] === undefined) {
                obj[idx] = unescape(p[1]);
            } else {
                if (typeof obj[idx] == "string") {
                    obj[idx] = [obj[idx]];
                }
                obj[idx].push(unescape(p[1]));
            }
        }

        return obj;
    };

    var serialize = function (obj) {
        var str = [];
        for (var p in obj)
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        return str.join("&");
    }

    core.unserialize = unserialize;
    core.test1 = function() {
        console.log('核心js库方法');
    }
    core.send = function (url, options) {
        var ajaxOptions = {
            url: this.api_host+url,
            type: 'GET',
            timeout: core.config.AJAX_TIMEOUT,
            loadingBar: true,
            dataType: 'json',
            debugConsole: true
        };

        options = options || {};
        if ($.isFunction(options.fn)) {
            options.__TFCallback = options.fn;
            delete options.fn;
        }
        mix(ajaxOptions, options, true);
        if ($.type(ajaxOptions.data) == 'object') {
            var el = $(ajaxOptions.data);
            var tagName = el.prop('tagName');

            if (tagName && tagName.toLowerCase() == 'form') {
                ajaxOptions.data = el.serialize();
            }
        }

        if (!ajaxOptions.hasCache && ajaxOptions.type == 'GET') {
            ajaxOptions.data = ajaxOptions.data || {};
            if (typeof (ajaxOptions.data) == 'string') {
                //ajaxOptions.data = unserialize(ajaxOptions.data);
            }
            ajaxOptions.data['_reqno'] = core.Helper.random();
        }
        var path = location.pathname.split('/');
        path[path.length - 1] = url;
        if (core.debug && ajaxOptions.debugConsole) {
            if (ajaxOptions['type'] != 'post') {
                console.debug('HTTP finished: http://' + location.host + ajaxOptions['url'] + '?' + serialize(ajaxOptions['data']));
            } else {
                console.debug('HTTP finished: http://' + location.host + ajaxOptions['url']);
            }

        }

        if (ajaxOptions.loadingBar) {
            if (typeof (ajaxOptions) == 'object') {
                // core.LoadingSpinner.show(ajaxOptions.loadingBar);
                core.LoadingSpinner.show({
                    parentWrap: '.m-loading'
                });
            } else {
                core.LoadingSpinner.show({
                    parentWrap: '.m-loading'
                });
            }

            ajaxOptions['success'] = function (result) {
                core.LoadingSpinner.hide();
                var isSuccess = false;
                if (result.errcode == 0) {
                    isSuccess = true;
                } else if (result.errcode == 110) {
                    Physics.sendMessage('用户正在跳转登录');
                    window.setTimeout(function () {
                        window.location.href = "/#/login";
                    }, 3000);
                } else {
                    // to do status handle
                }
                options['success'](result, isSuccess);
            }

            ajaxOptions['error'] = function (result) {
                core.LoadingSpinner.hide();
                Physics.sendMessage('系统繁忙,请稍后重试');
                if (options['error']) {
                    options['error'](result);
                }

            }

        }

        return $.ajax(ajaxOptions);

    /*
    // 如果已经发送请求，则取消上一个请求
    var requestName = url;
    var currentRequester = this.sendRequester.get(requestName);
    if (currentRequester) {
        currentRequester.abort();
    }

    ajaxOptions.context.options = ajaxOptions;

    currentRequester = $.ajax(ajaxOptions);

    this.sendRequester.set(requestName, currentRequester);

    if (options.loadingMsg !== false) {
        this.setLoadingMsg(options.loadingMsg);
    }

    return currentRequester;*/
    };

    // 转换时间戳为时间的函数
    core.formateTime = function(shijianchuo) {
        if (!isNaN(shijianchuo)) {
            var time = new Date(parseInt(shijianchuo));
        } else {
            var time = new Date(shijianchuo);
        }
        
        var y = time.getFullYear();
        var m = time.getMonth() + 1;
        var d = time.getDate();
        var h = time.getHours();
        var mm = time.getMinutes();
        var s = time.getSeconds();
        return y+'-'+m+'-'+d+':'+h+':'+mm+':'+s;
    }


    window.Physics = core;
    // window.App = core;
}());