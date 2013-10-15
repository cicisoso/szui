# form

---

通用表单样式。可基于此表单样式构建各类功能表单。

---

## 演示

> 演示中还引用了 [alice/button](http://aliceui.org/button) 和 [alice/tiptext](http://aliceui.org/tiptext) 。

<link type="text/css" rel="stylesheet" media="screen" href="http://assets.spmjs.org/alice/button/1.1.1/button.css">
<link type="text/css" rel="stylesheet" media="screen" href="http://assets.spmjs.org/alice/tiptext/1.1.0/tiptext.css">
<link type="text/css" rel="stylesheet" media="screen" href="src/form.css">
<link type="text/css" rel="stylesheet" media="screen" href="src/input.css">
<link type="text/css" rel="stylesheet" media="screen" href="src/label.css">

### 基本用法

````html
<form class="ui-form" name="" method="post" action="#" id="">
                            <fieldset>
                                <legend>表单标题</legend>

                                <div class="ui-form-item-text">
                                    <label class="ui-label">表单项文本:</label>
                                    <p class="ui-form-text">一个个文字文字
                                </div>

                                <div class="ui-form-item">
                                    <label class="ui-label">
                                        <span class="ui-form-label-title">推广计划名称:</span>
                                        <input class="ui-input" type="text">
                                    </label>
                                    <span class="ui-form-required">*</span>
                                    <span class="ui-form-other">不超过20个汉字</span>
                                    
                                    <p class="ui-form-explain">默认文案。</p>
                                </div>


                                <div class="ui-form-item ui-form-item-error">
                                    <label class="ui-label">
                                        <span class="ui-form-label-title">推广计划名称:</span>
                                        <input class="ui-input ui-input-w300" type="text">
                                    </label>
                                    <span class="ui-form-other"><a href="#">表单项其他</a></span>
                                    <p class="ui-form-explain ui-tiptext ui-tiptext-error">
                                        <i class="ui-tiptext-icon iconfont" title="出错">&#xF045;</i>
                                        此在DOM上保存属性值，请使用data-xxx的形式。
                                    </p>
                                </div>

                                <div class="ui-form-item">
                                    <label class="ui-label ui-label-noborder">表单项文本</label>
                                    <textarea class="ui-textarea">一二三四五六七八九十</textarea>
                                    <p class="ui-form-explain ui-tiptext ui-tiptext-success">
                                        <i class="ui-tiptext-icon iconfont" title="成功">&#xF049;</i>
                                        成功文案。
                                    </p>
                                </div>

                                <div class="ui-form-item">
                                    <label class="ui-label ui-label-noborder">下拉选择</label>
                                    <select id="province" name="province">
                                        <option value="">
                                        请选择
                                        </option>
                                        <option value="北京">
                                        北京
                                        </option>
                                        <option value="上海">
                                        上海
                                        </option>
                                        <option value="天津">
                                        天津
                                        </option>
                                        <option value="浙江">
                                        浙江
                                        </option>
                                    </select>
                                    
                                    <p class="ui-form-explain">更多地区即将开通，敬请期待。</p>
                                </div>

                                <div class="ui-form-item">
                                    <label for="" class="ui-label ui-label-disable">
                                    <span class="ui-form-label-title">不可用input:</span>
                                        <input class="ui-input ui-input-disable" value="fwerwe" type="text" disabled>
                                    </label>
                                           
                                    <p class="ui-form-explain">目前不可用</p>
                                </div>


                                <div class="ui-form-item">
                                    <label class="ui-label-checkbox">
                                        <input class="ui-checkbox" value="" type="checkbox">
                                        我已阅读并接受自主缴费服务协议
                                    </label>
                                </div>

                                <div class="ui-form-item">
                                    <input type="submit" class="ui-button ui-button-normal" value="确定">
                                </div>   

                            </fieldset>
                        </form>
````

> input 和 textarea 的 :focus 、:hover 效果在 IE6 下无效，
  可使用 `ui-input-focus` 和 `ui-input-hover` 类来修复。


和 arale/validator 配合使用：http://aralejs.org/validator/examples/aliceui.html
