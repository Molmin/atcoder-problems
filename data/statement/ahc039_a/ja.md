## ストーリー

高橋くんは巻き網漁を行う腕利きの漁師である。
彼の漁船には最新鋭のソナーが搭載されており、漁場内の魚の位置を正確に把握することが可能である。
また、漁船は高速で移動できるため、網を設置している間、魚が動かないものと仮定して作業を進めることができる。

漁の方法は、漁船を使って網を設置して閉じた多角形を作り、その内部の魚を捕獲するというものである。
ただし、効率よく作業を行うために、網を構成する多角形の各辺は、必ず東西、もしくは南北に平行でなければならない。
また、漁船の装備している網の長さには限りがあるため、限られた網の長さで多角形を作らなければならない。

今回の漁場にはサバとイワシの二種類の魚が生息している。
資源保護の観点から、現在この漁場でのイワシは禁漁対象であり、網にかかったイワシは全て放流しなければならない。
これは手間がかかるため、可能な限りイワシを避けつつ、出来るだけ多くのサバを捕獲してほしい。

## 問題文

二次元平面上に $N$ 匹のサバと $N$ 匹のイワシがいる。<br>
以下の条件を満たす多角形を構築し、その内側に含まれるサバの総数から内側に含まれるイワシの総数を引いた値を最大化せよ。<br>
なお、多角形の辺上に存在する点は全て多角形の内側に含まれるものとみなす。

## 条件

1. 多角形の頂点数は $1000$ 以下であり、辺の長さの総和は $4 \times 10^5$ 以下である。
2. 各頂点 $(x, y)$ の座標は整数で $0 \leq x, y \leq 10^5$ を満たす。
3. 各辺は $x$ 軸または $y$ 軸に平行である。
4. 多角形は自己交差しない。すなわち、隣接しない2辺は共通点を持たず、隣接する2辺は共有する頂点以外に共有点を持たない。

## 得点

出力した多角形の内側に含まれるサバの総数を $a$、イワシの総数を $b$ としたとき、$\max(0, a-b+1)$ の得点が得られる。

合計で 150 個のテストケースがあり、各テストケースの得点の合計が提出の得点となる。
一つ以上のテストケースで不正な出力や制限時間超過をした場合、提出全体の判定がWAやTLEとなる。
コンテスト時間中に得た最高得点で最終順位が決定され、コンテスト終了後のシステムテストは行われない。 同じ得点を複数の参加者が得た場合、提出時刻に関わらず同じ順位となる。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $x_0$ $y_0$
> 
> $\vdots$
> 
> $x_{2N-1}$ $y_{2N-1}$

- 全てのテストケースで、サバとイワシの匹数 $N$ は $5000$ で固定である。
- 各 $i=0,1,\cdots,N-1$ に対し、$(x_i,y_i)$ は $i$ 番目のサバの座標を表す
- 各 $i=0,1,\cdots,N-1$ に対し、$(x_{N+i},y_{N+i})$ は $i$ 番目のイワシの座標を表す。
- 各座標 $(x_i,y_i)$ は、$0\leq x_i,y_i\leq 10^5$ を満たし、全ての座標は相異なる。

## 出力

多角形の頂点数を $m$ ($4\leq m\leq 1000$)とし、$i$ 番目の頂点の座標を $(a_i,b_i)$ としたとき、
以下の形式で標準出力に出力せよ。

> $m$
> 
> $a_0$ $b_0$
> 
> $\vdots$
> 
> $a_{m-1}$ $b_{m-1}$

出力した頂点は多角形の角となっていなくても良い、すなわち、連続する3頂点 $(a_i,b_i), (a_{i+1},b_{i+1}), (a_{i+2},a_{i+2})$ が一直線上に並んでいても構わない。
ただし、全ての頂点は異なる座標でなければならない。
頂点は時計回り・反時計回りのどちらで出力しても構わない。

[例を見る](https://img.atcoder.jp/ahc039/KNtTkgAy.html?lang=ja&amp;seed=0&amp;output=sample)

解は複数回出力しても良い。
複数出力された場合、一番最後に出力された解のみが採点に用いられる。
Web版のビジュアライザを用いると、複数の解の比較が可能である。

## 入力生成方法

- $\mathrm{rand}(L,U)$: $L$ 以上 $U$ 以下の整数値を一様ランダムに生成する。
- $\mathrm{rand\_double}(L,U)$: $L$ 以上 $U$ 以下の実数値を一様ランダムに生成する。
- $\mathrm{normal}(\mu,\sigma)$: 平均 $\mu$、標準偏差 $\sigma$ の正規分布からランダムに実数値を生成する。

まずはじめに、サバの座標を生成する。
クラスタ数 $n$ を、$n=\mathrm{rand}(10,25)$ により生成する。
各クラスタ $i$ に対し、重み $w_i=\mathrm{rand\_double}(0,1)$、中心 $(cx_i,cy_i)=(\mathrm{rand}(20000,80000),\mathrm{rand}(20000,80000))$、標準偏差 $\sigma_i=\mathrm{rand}(1000,5000)$ を生成する。
以下の処理を $N$ 回繰り返すことで $N$ 匹のサバの座標を生成する。

重み $w_i$ に比例する確率でクラスタ $i$ をランダムに選択する。
選択された $i$ に対し、$x=\mathrm{round}(\mathrm{normal}(cx_i,\sigma_i))$、$y=\mathrm{round}(\mathrm{normal}(cy_i,\sigma_i))$ を生成する。
生成された座標 $(x,y)$ が $0\leq x,y\leq 10^5$ を満たし、かつ、これまで生成されたどの座標とも異なる場合、サバの座標として採用する。
そうでない場合は $(x,y)$ の生成をやり直す。

サバの座標の生成が完了したら、同様にしてイワシの座標を生成する。

## ツール(入力ジェネレータ・ビジュアライザ)

- [Web版](https://img.atcoder.jp/ahc039/KNtTkgAy.html?lang=ja): ローカル版より高性能でアニメーション表示が可能です。
- [ローカル版](https://img.atcoder.jp/ahc039/KNtTkgAy.zip): 使用するには[Rust言語](https://www.rust-lang.org/ja)のコンパイル環境をご用意下さい。-   - [Windows用のコンパイル済みバイナリ](https://img.atcoder.jp/ahc039/KNtTkgAy_windows.zip): Rust言語の環境構築が面倒な方は代わりにこちらをご利用下さい。

コンテスト期間中に、ビジュアライズ結果の共有や、解法・考察に関する言及は禁止されています。ご注意下さい。