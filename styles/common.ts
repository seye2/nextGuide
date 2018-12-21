export default () => `
    @import url(https://cdn.rawgit.com/theeluwin/NotoSansKR-Hestia/master/stylesheets/NotoSansKR-Hestia.css);
    
    /* css reset */
    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p,
    blockquote, pre, a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub,
    sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section,
    summary, time, mark, audio, video {
      padding: 0;
      margin: 0;
      border: 0;
      font-family: 'Roboto', 'Noto Sans Korean', sans-serif;
    }
    
    article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
      display: block;
    }
    
    ol, ul {
      list-style: none;
    }
    
    table {
      border-spacing: 0;
      border-collapse: collapse;
    }
    
    h1, h2, h3, h4, h5, h6 {
      font-size: 100%;
      font-weight: normal;
    }
    
    fieldset, img {
      vertical-align: top;
      border: 0;
    }
    
    address {
      font-style: normal;
    }
    
    /* a-style */
    a {
      color: #333;
      text-decoration: none;
    }
    
    a:hover, a:active, a:focus {
      text-decoration: none;
    }
    
    legend {
      display: none;
    }

    
    .header{
        position:fixed;
        top:0;left:0;
        width:100%;height:70px;
        background-color:#003366;
    }
    
    .gnb{
        margin:10PX 0 0 0;
        padding:10PX 0;
        text-align:center;
        border:1px solid #e9e9e9;
    }
    
    .contents{
        margin:40px 0;
        text-align:center;
    }
    
    .footer{
        margin:0;
        padding:14px 0;
        text-align:center;
        border:1px solid #000000;
    }
`
