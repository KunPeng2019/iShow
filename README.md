<div class="Box-body">
        <article class="markdown-body entry-content p-5" itemprop="text"><h1><a id="user-content-vue-video" class="anchor" aria-hidden="true" href="#vue-video"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">VUE视频</font></font></h1>
<blockquote>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">适用于Vue.js的HTML5视频播放器组件</font></font></p>
</blockquote>
<h2><a id="user-content-demo" class="anchor" aria-hidden="true" href="#demo"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示</font></font></h2>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现场演示在这里：</font><a href="https://hilongjw.github.io/vue-video/" rel="nofollow"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：</font></font><a href="https://hilongjw.github.io/vue-video/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//hilongjw.github.io/vue-video/</font></font></a></p>
<p><a target="_blank" rel="noopener noreferrer" href="https://raw.githubusercontent.com/hilongjw/vue-video/master/preview.png"><img src="https://raw.githubusercontent.com/hilongjw/vue-video/master/preview.png" alt="" style="max-width:100%;"></a>
<a target="_blank" rel="noopener noreferrer" href="https://raw.githubusercontent.com/hilongjw/vue-video/master/preview2.png"><img src="https://raw.githubusercontent.com/hilongjw/vue-video/master/preview2.png" alt="" style="max-width:100%;"></a></p>
<h2><a id="user-content-installation" class="anchor" aria-hidden="true" href="#installation"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装</font></font></h2>
<div class="highlight highlight-source-shell"><pre><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm i vue-video --save
</font></font></pre></div>
<h2><a id="user-content-usage" class="anchor" aria-hidden="true" href="#usage"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法</font></font></h2>
<pre><code>// script<font></font>
import myVideo from 'vue-video'<font></font>
export default {<font></font>
    data () {<font></font>
        return {<font></font>
            video: {<font></font>
                sources: [{<font></font>
                    src: 'http://covteam.u.qiniudn.com/oceans.mp4',<font></font>
                    type: 'video/mp4'<font></font>
                }],<font></font>
                options: {<font></font>
                    autoplay: true,<font></font>
                    volume: 0.6,<font></font>
                    poster: 'http://covteam.u.qiniudn.com/poster.png'<font></font>
                }<font></font>
            }<font></font>
        }<font></font>
    },<font></font>
    components: {<font></font>
        myVideo<font></font>
    }<font></font>
}<font></font>
</code></pre>
<div class="highlight highlight-text-html-basic"><pre><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">&lt; </font></font><span class="pl-ent"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">template</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &gt;</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    &lt; </font></font><span class="pl-ent"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">div </font></font></span> <span class="pl-e"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">id</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> = </font></font><span class="pl-s"><span class="pl-pds"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> app </font></font><span class="pl-pds"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">”</font></font></span></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &gt;</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        &lt; </font></font><span class="pl-ent"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">div </font></font></span> <span class="pl-e"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">class</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> = </font></font><span class="pl-s"><span class="pl-pds"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> container </font></font><span class="pl-pds"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">”</font></font></span></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &gt;</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
            &lt; </font></font><span class="pl-ent"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">my-video </font></font></span> <span class="pl-e"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：sources</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> = </font></font><span class="pl-s"><span class="pl-pds"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> video.sources </font></font><span class="pl-pds"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">”</font></font></span></span> <span class="pl-e"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：options</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> = </font></font><span class="pl-s"><span class="pl-pds"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> video.options </font></font><span class="pl-pds"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">”</font></font></span></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &gt; &lt;/ </font></font><span class="pl-ent"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">my-video</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &gt;</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        &lt;/ </font></font><span class="pl-ent"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">div</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &gt;</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    &lt;/ </font></font><span class="pl-ent"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">div</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &gt;</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
&lt;/ </font></font><span class="pl-ent"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">template</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &gt;</font></font></pre></div>
<h2><a id="user-content-api" class="anchor" aria-hidden="true" href="#api"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">API</font></font></h2>
<blockquote>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来源</font></font></p>
</blockquote>
<pre><code>sources: [{<font></font>
    // video uri<font></font>
    src: 'http://covteam.u.qiniudn.com/oceans.mp4',<font></font>
    // video meta type<font></font>
    type: 'video/mp4'<font></font>
}]<font></font>
<font></font>
</code></pre>
<blockquote>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项</font></font></p>
</blockquote>
<pre><code>options: {<font></font>
    // autoplay<font></font>
    autoplay: true,<font></font>
    // default volume<font></font>
    volume: 0.6,<font></font>
    // poster (cover image)<font></font>
    poster: 'http://covteam.u.qiniudn.com/poster.png'<font></font>
}<font></font>
</code></pre>
</article>
      </div>
