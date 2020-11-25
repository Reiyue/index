<!DOCTYPE html>
<html lang="zh-TW">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Drafting: A dreamer's place.</title>
    <meta name="author" content="Yiwei Chiao" />
    <meta name="description" content="A place for dreamers." />
    <meta name="keywords" content="Javascript, game" />
    <link rel="stylesheet" href="assets/css/styles.css" />
    <script src="js/index.js"></script>
  </head>
  <body>
    <div class="site-container">
      <header class="site-banner">
        <h1>Drafting</h1>
        <h3>一個 html/css/node.js 的練習專案</h3>
      </header>
      <article class="site-body">
        <header class="site-status">
          <span>
            x:<span id="cursor-x">646</span>
            y:<span id="cursor-y">292</span>
          </span>
        </header>
        <section class="card">
          <header class="card-header"><span>Drafting!</span></header>
          <article class="card-content">
<!-- -*- begin -*- 要產生的 HTML 碼由這裡開始 -->
            <div class="pane">
              <div class="h-field">
                <label class="control-label" for="name">姓名</label>
                <p class="control">
                  <input
                    class="input"
                    placeholder="王大錘"
                    id="name"
                    type="text"
                  />
                </p>
              </div>
              <div class="h-field">
                <label class="control-label" for="hp">血量 (hp)</label>
                <p class="control">
                  <input class="input" placeholder="10" id="hp" type="number" />
                </p>
              </div>
              <div class="h-field">
                <label class="control-label" for="ap">攻擊力 (ap)</label>
                <p class="control">
                  <input class="input" placeholder="1" id="ap" type="number" />
                </p>
              </div>
              <div class="h-field">
                <label class="control-label" for="dp">防禦力 (dp)</label>
                <p class="control">
                  <input class="input" placeholder="0" id="dp" type="number" />
                </p>
              </div>
            </div>
<!-- -*- end -*- 到這裡結束 -->
          </article>
        </section>
      </article>
      <footer class="site-footer">
        <small class="float-right">
          © Copyright 2020，佛光大學資訊應用學系
        </small>
      </footer>
    </div>
  </body>
</html>