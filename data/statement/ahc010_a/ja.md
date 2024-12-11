## ストーリー

環状線が大好きな高橋くんは鉄道玩具で遊んでいる。
この玩具は、下図のように並べられた正方形の線路タイルを回転させることで線路を繋ぎ、その上を電車の模型を走らせるというものである。
高橋くんは電車の模型を2台持っているので、出来るだけ大きな環状線を2つ作ってほしい。

初期状態

右上と右中央を回転

## 問題文

$30\times 30$ マスに並んだ線路タイルが与えられる。
タイルは回転したものを区別すると8種類あり、以下のように番号付ける。

<svg height="70" id="vis" viewBox="-5 -5 250 70" width="250" xmlns="http://www.w3.org/2000/svg">
<rect fill="white" height="70" width="250" x="-5" y="-5"></rect>
<line stroke="lightgray" stroke-width="1" x1="0" x2="240" y1="0" y2="0"></line>
<line stroke="lightgray" stroke-width="1" x1="0" x2="0" y1="0" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="0" x2="240" y1="30" y2="30"></line>
<line stroke="lightgray" stroke-width="1" x1="30" x2="30" y1="0" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="0" x2="240" y1="60" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="60" x2="60" y1="0" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="90" x2="90" y1="0" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="120" x2="120" y1="0" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="150" x2="150" y1="0" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="180" x2="180" y1="0" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="210" x2="210" y1="0" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="240" x2="240" y1="0" y2="60"></line>
<text font-size="22" text-anchor="middle" x="15" y="55">
0
</text>
<text font-size="22" text-anchor="middle" x="45" y="55">
1
</text>
<text font-size="22" text-anchor="middle" x="75" y="55">
2
</text>
<text font-size="22" text-anchor="middle" x="105" y="55">
3
</text>
<text font-size="22" text-anchor="middle" x="135" y="55">
4
</text>
<text font-size="22" text-anchor="middle" x="165" y="55">
5
</text>
<text font-size="22" text-anchor="middle" x="195" y="55">
6
</text>
<text font-size="22" text-anchor="middle" x="225" y="55">
7
</text>
<defs>
<g id="rail1" stroke-width="2">
<line x1="12" x2="12" y1="0" y2="30"></line>
<line x1="18" x2="18" y1="0" y2="30"></line>
<line x1="12" x2="18" y1="3" y2="3"></line>
<line x1="12" x2="18" y1="9" y2="9"></line>
<line x1="12" x2="18" y1="15" y2="15"></line>
<line x1="12" x2="18" y1="21" y2="21"></line>
<line x1="12" x2="18" y1="27" y2="27"></line>
</g>
<g fill="none" id="rail2" stroke-width="2">
<path d="M12,0 A12,12 0 0,1 0,12"></path>
<path d="M18,0 A18,18 0 0,1 0,18"></path>
<line x1="12" x2="18" y1="2" y2="3"></line>
<line x1="11" x2="16" y1="5" y2="8"></line>
<line x1="8" x2="13" y1="8" y2="13"></line>
<line x1="5" x2="8" y1="11" y2="16"></line>
<line x1="2" x2="3" y1="12" y2="18"></line>
</g>
</defs>
<use href="#rail2" stroke="silver" x="0" y="0"></use>
<use href="#rail2" stroke="silver" transform="rotate(270,45,15)" x="30" y="0"></use>
<use href="#rail2" stroke="silver" transform="rotate(180,75,15)" x="60" y="0"></use>
<use href="#rail2" stroke="silver" transform="rotate(90,105,15)" x="90" y="0"></use>
<use href="#rail2" stroke="silver" x="120" y="0"></use>
<use href="#rail2" stroke="silver" transform="rotate(180,135,15)" x="120" y="0"></use>
<use href="#rail2" stroke="silver" transform="rotate(270,165,15)" x="150" y="0"></use>
<use href="#rail2" stroke="silver" transform="rotate(90,165,15)" x="150" y="0"></use>
<use href="#rail1" stroke="silver" transform="rotate(90,195,15)" x="180" y="0"></use>
<use href="#rail1" stroke="silver" x="210" y="0"></use>
</svg>

0から3番のタイルにはカーブした1本の線路、4番と5番のタイルにはカーブした2本の線路、6番と7番のタイルには直線の1本の線路が乗っている。
各タイルは90度ずつ回転させることが出来、反時計回りに90度回転させると次のようになる。

<svg height="70" id="vis" viewBox="-5 -5 250 70" width="250" xmlns="http://www.w3.org/2000/svg">
<rect fill="white" height="70" width="250" x="-5" y="-5"></rect>
<line stroke="lightgray" stroke-width="1" x1="0" x2="240" y1="0" y2="0"></line>
<line stroke="lightgray" stroke-width="1" x1="0" x2="0" y1="0" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="0" x2="240" y1="30" y2="30"></line>
<line stroke="lightgray" stroke-width="1" x1="30" x2="30" y1="0" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="0" x2="240" y1="60" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="60" x2="60" y1="0" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="90" x2="90" y1="0" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="120" x2="120" y1="0" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="150" x2="150" y1="0" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="180" x2="180" y1="0" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="210" x2="210" y1="0" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="240" x2="240" y1="0" y2="60"></line>
<text font-size="22" text-anchor="middle" x="15" y="55">
1
</text>
<text font-size="22" text-anchor="middle" x="45" y="55">
2
</text>
<text font-size="22" text-anchor="middle" x="75" y="55">
3
</text>
<text font-size="22" text-anchor="middle" x="105" y="55">
0
</text>
<text font-size="22" text-anchor="middle" x="135" y="55">
5
</text>
<text font-size="22" text-anchor="middle" x="165" y="55">
4
</text>
<text font-size="22" text-anchor="middle" x="195" y="55">
7
</text>
<text font-size="22" text-anchor="middle" x="225" y="55">
6
</text>
<defs>
<g id="rail1" stroke-width="2">
<line x1="12" x2="12" y1="0" y2="30"></line>
<line x1="18" x2="18" y1="0" y2="30"></line>
<line x1="12" x2="18" y1="3" y2="3"></line>
<line x1="12" x2="18" y1="9" y2="9"></line>
<line x1="12" x2="18" y1="15" y2="15"></line>
<line x1="12" x2="18" y1="21" y2="21"></line>
<line x1="12" x2="18" y1="27" y2="27"></line>
</g>
<g fill="none" id="rail2" stroke-width="2">
<path d="M12,0 A12,12 0 0,1 0,12"></path>
<path d="M18,0 A18,18 0 0,1 0,18"></path>
<line x1="12" x2="18" y1="2" y2="3"></line>
<line x1="11" x2="16" y1="5" y2="8"></line>
<line x1="8" x2="13" y1="8" y2="13"></line>
<line x1="5" x2="8" y1="11" y2="16"></line>
<line x1="2" x2="3" y1="12" y2="18"></line>
</g>
</defs>
<use href="#rail2" stroke="silver" transform="rotate(270,15,15)" x="0" y="0"></use>
<use href="#rail2" stroke="silver" transform="rotate(180,45,15)" x="30" y="0"></use>
<use href="#rail2" stroke="silver" transform="rotate(90,75,15)" x="60" y="0"></use>
<use href="#rail2" stroke="silver" x="90" y="0"></use>
<use href="#rail2" stroke="silver" transform="rotate(270,135,15)" x="120" y="0"></use>
<use href="#rail2" stroke="silver" transform="rotate(90,135,15)" x="120" y="0"></use>
<use href="#rail2" stroke="silver" x="150" y="0"></use>
<use href="#rail2" stroke="silver" transform="rotate(180,165,15)" x="150" y="0"></use>
<use href="#rail1" stroke="silver" x="180" y="0"></use>
<use href="#rail1" stroke="silver" transform="rotate(90,225,15)" x="210" y="0"></use>
</svg>

線路に枝分かれはないため、各線路はパスもしくは閉路をなす。
閉路をなす線路の集合を「環状線」と呼び、その長さを、線路に沿って一周する際にタイルから隣接タイルへ移動する回数と定義する。
例えば、以下の環状線は7タイルからなるが、真ん中のタイルを二回通るため、長さは8である。

<svg height="100" id="vis" viewBox="-5 -5 100 100" width="100" xmlns="http://www.w3.org/2000/svg">
<rect fill="white" height="100" width="100" x="-5" y="-5"></rect>
<line stroke="lightgray" stroke-width="1" x1="0" x2="90" y1="0" y2="0"></line>
<line stroke="lightgray" stroke-width="1" x1="0" x2="0" y1="0" y2="90"></line>
<line stroke="lightgray" stroke-width="1" x1="0" x2="90" y1="30" y2="30"></line>
<line stroke="lightgray" stroke-width="1" x1="30" x2="30" y1="0" y2="90"></line>
<line stroke="lightgray" stroke-width="1" x1="0" x2="90" y1="60" y2="60"></line>
<line stroke="lightgray" stroke-width="1" x1="60" x2="60" y1="0" y2="90"></line>
<line stroke="lightgray" stroke-width="1" x1="0" x2="90" y1="90" y2="90"></line>
<line stroke="lightgray" stroke-width="1" x1="90" x2="90" y1="0" y2="90"></line>
<defs>
<g id="rail1" stroke-width="2">
<line x1="12" x2="12" y1="0" y2="30"></line>
<line x1="18" x2="18" y1="0" y2="30"></line>
<line x1="12" x2="18" y1="3" y2="3"></line>
<line x1="12" x2="18" y1="9" y2="9"></line>
<line x1="12" x2="18" y1="15" y2="15"></line>
<line x1="12" x2="18" y1="21" y2="21"></line>
<line x1="12" x2="18" y1="27" y2="27"></line>
</g>
<g fill="none" id="rail2" stroke-width="2">
<path d="M12,0 A12,12 0 0,1 0,12"></path>
<path d="M18,0 A18,18 0 0,1 0,18"></path>
<line x1="12" x2="18" y1="2" y2="3"></line>
<line x1="11" x2="16" y1="5" y2="8"></line>
<line x1="8" x2="13" y1="8" y2="13"></line>
<line x1="5" x2="8" y1="11" y2="16"></line>
<line x1="2" x2="3" y1="12" y2="18"></line>
</g>
</defs>
<use href="#rail1" stroke="silver" x="0" y="0"></use>
<use href="#rail2" stroke="silver" x="30" y="0"></use>
<g>
<use href="#rail2" stroke="brown" transform="rotate(180,45,15)" x="30" y="0"></use>
</g>
<g>
<use href="#rail2" stroke="brown" transform="rotate(270,75,15)" x="60" y="0"></use>
</g>
<use href="#rail2" stroke="silver" x="0" y="30"></use>
<g>
<use href="#rail2" stroke="brown" transform="rotate(180,15,45)" x="0" y="30"></use>
</g>
<g>
<use href="#rail2" stroke="brown" x="30" y="30"></use>
</g>
<g>
<use href="#rail2" stroke="brown" transform="rotate(180,45,45)" x="30" y="30"></use>
</g>
<g>
<use href="#rail2" stroke="brown" x="60" y="30"></use>
</g>
<use href="#rail2" stroke="silver" transform="rotate(270,15,75)" x="0" y="60"></use>
<g>
<use href="#rail2" stroke="brown" transform="rotate(90,15,75)" x="0" y="60"></use>
</g>
<g>
<use href="#rail2" stroke="brown" x="30" y="60"></use>
</g>
<use href="#rail2" stroke="silver" transform="rotate(180,45,75)" x="30" y="60"></use>
<use href="#rail2" stroke="silver" x="60" y="60"></use>
</svg>

各タイルを回転させる回数を決定せよ。

## 得点

出力に従ってタイルを回転させることで得られた環状線のうち、一番長いものの長さを$L_1$、二番目に長いものの長さを$L_2$とする(最長のものが複数ある場合は$L_1=L_2$)。
このとき、$L_1\times L_2$ の得点が得られる。
環状線の個数が $1$ 以下の場合、そのテストケースの得点は $0$ 点となる。

テストケースは全部で 100 個あり、各テストケースの得点の合計が提出の得点となる。
1つ以上のテストケースで AC 以外の判定がされた場合、提出の得点は0点となる。
コンテスト時間中に得た最高得点で最終順位が決定され、コンテスト終了後のシステムテストは行われない。
同じ得点を複数の参加者が得た場合、その得点を獲得した提出の早い方が上位となる。

環状線の長さの求め方のヒント

疑似コードを更新しました。

環状線の長さは例えば以下のようにして計算できる。
タイルの状態が入った二次元配列を `tiles` とする。
方向を左上右下の順に0,1,2,3と番号付けると、座標の変化は配列 `di = [0, -1, 0, 1]` と `dj = [-1, 0, 1, 0]` で表される。
状態 `t` 番のタイルに `d` の方向から侵入した際に次に向かうタイルの方向を `to[t][d]`、ただしそのような方向から侵入不可能な場合は`-1`とすると、以下のような二次元配列となる。

```plain
to = [
    [1, 0, -1, -1],
    [3, -1, -1, 0],
    [-1, -1, 3, 2],
    [-1, 2, 1, -1],
    [1, 0, 3, 2],
    [3, 2, 1, 0],
    [2, -1, 0, -1],
    [-1, 3, -1, 1],
];
```

位置 `(i, j)` のタイルに `d` の方向のタイルから侵入したとき、これらの組を以下のように更新出来る。

```plain
d2 = to[tiles[i][j]][d]; // 次のタイルの方向
if (d2 == -1) return 0; // 線路が途切れている
i += di[d2];
j += dj[d2];
if (i < 0 || i >= 30 || j < 0 || j >= 30) return 0; // 線路が途切れている
d = (d2 + 2) % 4; // 今居たタイルの方向
```

あとはこの処理を最初の位置と向き(同じタイルを二度通る可能性があることに注意)に戻ってくるまで繰り返せば、繰り返し回数が環状線の長さとなる。

```plain
// (si, sj) のタイルに sd 方向のタイルから侵入した状態からスタートして環状線の長さを求める
i = si;
j = sj;
d = sd;
loop {
    d2 = to[tiles[i][j]][d];
    if (d2 == -1) return 0;
    i += di[d2];
    j += dj[d2];
    if (i < 0 || i >= 30 || j < 0 || j >= 30) return 0;
    d = (d2 + 2) % 4;
    length += 1;
    if (i == si && j == sj && d == sd) return length;
}
```

## 入力

入力は以下の形式で標準入力から与えられる。

> $t_{0,0}$ $\cdots$ $t_{0,29}$
> 
> $\vdots$
> 
> $t_{29,0}$ $\cdots$ $t_{29,29}$

各 $t_{i,0}\cdots t_{i,29}$ は長さ $30$ の文字列である。
上から $i$ $(0\leq i\leq 29)$ 番目、左から $j$ $(0\leq j\leq 29)$ 番目のタイルを $(i, j)$ と表す。
$t_{i,j}$ はタイル $(i,j)$ の状態を表す $0$ 以上 $7$ 以下の数字である。

## 出力

タイル $(i,j)$ を反時計回りに90度回転させる回数を $r_{i,j}$ ($0\leq r_{i,j}\leq 3$) としたとき、$30i+j$ 文字目が $r_{i,j}$ となるような長さ $900$ の文字列を1行に出力せよ。

解を複数回出力しても良い。複数出力された場合は一番最後のもののみが採点に用いられる。ビジュアライザでは複数出力された解の比較が可能である。

[例を見る](https://img.atcoder.jp/ahc010/d3a6c91ee76cb8.html?lang=ja&amp;show=example)

## 入力生成方法

$L$ 以上 $U$ 以下の整数値を一様ランダムに生成する関数を $\mathrm{rand}(L,U)$ で表す。

各 $t_{i,j}$ はそれぞれ独立に以下のように生成される。

- 25% の確率で $t_{i,j}=\mathrm{rand}(0, 3)$ と生成する。
- 50% の確率で $t_{i,j}=\mathrm{rand}(4, 5)$ と生成する。
- 25% の確率で $t_{i,j}=\mathrm{rand}(6, 7)$ と生成する。

## ツール(入力ジェネレータ・ビジュアライザ)

- [Web版](https://img.atcoder.jp/ahc010/d3a6c91ee76cb8.html?lang=ja): ローカル版より高性能でアニメーション表示が可能です。
- [ローカル版](https://img.atcoder.jp/ahc010/d3a6c91ee76cb8.zip): 使用するには[Rust言語](https://www.rust-lang.org/ja)のコンパイル環境をご用意下さい。-   - [Windows用のコンパイル済みバイナリ](https://img.atcoder.jp/ahc010/d3a6c91ee76cb8_windows.zip): Rust言語の環境構築が面倒な方は代わりにこちらをご利用下さい。

<font color="red">**コンテスト終了までビジュアライズ結果の共有は禁止されています。ご注意下さい。**</font>

```input1
436204751575440756541724746755
347475575404531645424640344414
556644445442451553264555436757
761235545455474254546631467555
356447405421445153457656535564
014274425356522445253477726464
311765446655556346633757446600
471744514426443445162555525455
616053450444473274742055767455
254124557527462423444450075637
046546764557475436717475255501
752005462554554414031525515356
452524742177476245065554577605
664465643742341605007655253777
444571276444165545442447340356
435050335454565235025507452540
467560030465475447567644441426
735730577745561712541450443547
472675153755474445700540444544
507472724556677621365747544757
535177720776402476665547676174
636275455643650141456764547131
164624553536572554544165746536
521574724335644274433544442556
576732703453654464555315065544
656244747015464523316444145414
555646775254464367454454067475
665624154657072514445150474444
570004746554540445465051654541
635504417414262014475547424275
```

```output1
000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
```