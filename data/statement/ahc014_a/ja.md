## 問題文

RectJoin は正方形の方眼紙と鉛筆を使って遊ぶ以下のような一人プレイゲームである。

![example](https://img.atcoder.jp/ahc014/a3c240f5b1.gif) 

方眼紙の左下隅の格子点の座標を $(0, 0)$ とし、右方向に $x$ 軸、上方向に $y$ 軸を取る。
方眼紙の右上隅の格子点の座標は $(N-1, N-1)$ である。
初期状態で $M$ 個の格子点に印が付けられており、以下の操作を可能な限り好きなだけ繰り返すことで方眼紙に印と長方形を描いていく。

$i$ 回目の操作では、まだ印の付けられていない格子点 $p_{i,1}$ と、既に印の付けられている3つの格子点 $p_{i,2}, p_{i,3}, p_{i,4}$ であって、以下の3つの条件を全て満たすものを選ぶ。

1. $p_{i,1} p_{i,2} p_{i,3} p_{i,4}$ をこの順番に結ぶと軸に平行、もしくは45度傾いた長方形となる。
2. この長方形の外周上には $p_{i,2}, p_{i,3}, p_{i,4}$ 以外に印の付いた格子点は存在しない。
3. この長方形の外周は、既に方眼紙に描かれている長方形の外周と正の長さの共通部分を持たない(いくつかの点で交わることは許される)。

選んだ4点に対して、$p_{i,1}$ に新たに印を付け、長方形 $p_{i,1} p_{i,2} p_{i,3} p_{i,4}$ の外周を方眼紙に描く。

方眼紙の中心の座標を $(c,c)=((N-1)/2,(N-1)/2)$ とする。
各格子点の重みを中心からの距離を用いて $w(x,y)=(x-c)^2 + (y-c)^2 + 1$ と定義し、全ての格子点の重みの総和を $S=\sum_{x=0}^{N-1}\sum_{y=0}^{N-1} w(x,y)$ とする。
最終的に印のついている座標の集合(最初から印が付いているものを含む)を $Q$ としたとき、

\[\mathrm{round}\left(10^6 \cdot\frac{N^2}{M}\cdot\frac{\sum_{(x, y)\in Q} w(x, y)}{S}\right)\]

の得点が得られる。
出来るだけ高得点が得られるようにゲームをプレイするプログラムを作成せよ。

### ルールの補足

- $p_{i,1}$ は方眼紙の内部、すなわち、$x$ 座標と $y$ 座標がともに $0$ 以上 $N-1$ 以下の範囲から選択しなければならない。
- $p_{i,1}$ として選択した格子点は印が付くため、$j( &gt; i)$ 回目の操作で $p_{j,1}$ として再度選択することは出来ないが、$p_{j,k} (k=2,3,4)$ として再度選択することは出来る。
- $p_{i,k} (k=2,3,4)$ も同様に、$j( &gt; i)$ 回目の操作で $p_{j,k'} (k'=2,3,4)$ として繰り返し何度も選択出来る。
- 条件2にあるように、選んだ長方形の外周に他の印があってはならないが、逆に、既に描かれている長方形の外周上の点を $p_{i,1}$ として選択して印を付けることは可能である。

### テストケース数

- 暫定テスト: 50個
- システムテスト: 2000個、コンテスト終了後に[seeds.txt](https://img.atcoder.jp/ahc014/seeds.txt) (sha256=907b41fcba240515612a21798a10b0df7dda744b1268b74b3bbd41b93a73095e) を公開
- システムテストは $N=31,33,35,\cdots,61$ の入力をそれぞれ125個ずつ含む。
- seed=0 の入力は手動で作成されたものであり、暫定テスト、システムテストには含まれない。

各テストケースの得点の合計が提出の得点となる。
暫定テストでは、一つ以上のテストケースで不正な出力や制限時間超過をした場合、提出全体の判定がWAやTLEとなる。
最終順位はコンテスト終了後に実施されるより多くの入力に対するシステムテストにおける得点で決定される。
システムテストでは、不正な出力や制限時間超過をした場合、そのテストケースのみ0点となる。
システムテストは<font color="red">** CE 以外の結果を得た一番最後の提出**</font>に対してのみ行われるため、最終的に提出する解答を間違えないよう注意せよ。

### 実行時間について

実行時間には多少のブレが生じます。
また、システムテストでは同時に大量の実行を行うため、暫定テストに比べて数%程度実行時間が伸びる現象が確認されています。
そのため、実行時間制限ギリギリの提出がシステムテストでTLEとなる可能性があります。
プログラム内で時間を計測して処理を打ち切るか、実行時間に余裕を持たせるようお願いします。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $x_1$ $y_1$
> 
> $\vdots$
> 
> $x_M$ $y_M$

- $N$ は方眼紙の縦横の格子点の数を表す、31 以上 61 以下の奇数である。
- $M$ は初期状態で印の付いている格子点の個数を表す、$N$ 以上 $\lfloor N^2/12 \rfloor$ 以下の整数である。
- $(x_1, y_1), \cdots, (x_M, y_M)$ は 初期状態に置ける $M$ 個の印の付いた格子点の座標を表し、$\lfloor N/4\rfloor\leq x_i,y_i\leq\lfloor 3N/4\rfloor$ を満たす。

## 出力

全部で $K$ 回の操作を行い、$i$ 回目の操作で選択した4点を $(x_{i,1}, y_{i,1}), (x_{i,2}, y_{i,2}), (x_{i,3}, y_{i,3}), (x_{i,4}, y_{i,4})$ としたとき、以下の形式で標準出力に出力せよ。

> $K$
> 
> $x_{1,1}$ $y_{1,1}$ $x_{1,2}$ $y_{1,2}$ $x_{1,3}$ $y_{1,3}$ $x_{1,4}$ $y_{1,4}$
> 
> $\vdots$
> 
> $x_{K,1}$ $y_{K,1}$ $x_{K,2}$ $y_{K,2}$ $x_{K,3}$ $y_{K,3}$ $x_{K,4}$ $y_{K,4}$

4点の順番は時計回りでも反時計回りでも良いが、$(x_{i,1}, y_{i,1})$ が新たに印を付ける点でなければならない。

[例を見る](https://img.atcoder.jp/ahc014/a3c240f5b1.html?lang=ja&amp;seed=0&amp;output=20%0D%0A9+15+12+12+15+15+12+18%0D%0A15+20+12+17+15+14+18+17%0D%0A23+22+19+22+19+12+23+12%0D%0A23+14+22+15+21+14+22+13%0D%0A10+14+10+13+12+13+12+14%0D%0A11+11+12+11+12+12+11+12%0D%0A18+20+15+20+15+19+18+19%0D%0A19+16+22+19+21+20+18+17%0D%0A12+19+12+18+15+18+15+19%0D%0A15+22+12+19+15+16+18+19%0D%0A14+22+15+22+15+24+14+24%0D%0A15+8+18+11+15+14+12+11%0D%0A10+15+9+15+9+14+10+14%0D%0A11+18+12+19+10+21+9+20%0D%0A22+23+20+21+21+20+23+22%0D%0A21+15+18+15+18+14+21+14%0D%0A15+26+13+24+15+22+17+24%0D%0A20+20+16+24+14+22+18+18%0D%0A21+17+18+20+15+17+18+14%0D%0A11+14+10+13+11+12+12+13%0D%0A)

## 入力生成方法

seed=0 の入力は手動で作成されたものであり、暫定テスト、システムテストには含まれない。
$L$ 以上 $U$ 以下の整数値を一様ランダムに生成する関数を $\mathrm{rand}(L,U)$ で表す。

### $N, M$ の生成

$N=\mathrm{rand}(15, 30)\times 2 + 1$、$M=\mathrm{rand}(N, \lfloor N^2/12 \rfloor)$ により生成される。

### $(x_i, y_i)$ の生成

$\lfloor N/4\rfloor\leq x,y\leq\lfloor 3N/4\rfloor$ を満たす格子点 $(x,y)$ の中からランダムに $M$ 個が選択される。

## ツール(入力ジェネレータ・ビジュアライザ)

- [Web版](https://img.atcoder.jp/ahc014/a3c240f5b1.html?lang=ja): ローカル版より高性能でアニメーション表示と手動プレイが可能です。
- [ローカル版](https://img.atcoder.jp/ahc014/a3c240f5b1.zip): 使用するには[Rust言語](https://www.rust-lang.org/ja)のコンパイル環境をご用意下さい。-   - [Windows用のコンパイル済みバイナリ](https://img.atcoder.jp/ahc014/a3c240f5b1_windows.zip): Rust言語の環境構築が面倒な方は代わりにこちらをご利用下さい。

<font color="red">
コンテスト期間中に、seed=0 に対するビジュアライザの出力画像(PNG)のみ twitter で共有が可能です。動画形式での共有は禁止されているのでご注意下さい。
</font>
必ず指定されたハッシュタグを用い、公開アカウントを使用して下さい。共有出来るのはseed=0に対するビジュアライズ結果と点数のみで、GIF動画や出力文字列、他のシードでの点数の共有や、解法・考察に関する言及は禁止です。

[共有された画像の一覧](https://twitter.com/search?q=%23AHC014%20%23visualizer&amp;src=typed_query&amp;f=live)

```input1
33 58
13 24
14 24
15 24
16 24
17 24
12 23
18 23
11 22
19 22
10 21
20 21
9 20
21 20
8 19
15 19
18 19
22 19
8 18
12 18
15 18
18 18
22 18
8 17
12 17
15 17
18 17
22 17
8 16
12 16
15 16
18 16
22 16
8 15
12 15
15 15
18 15
22 15
9 14
12 14
15 14
18 14
21 14
10 13
12 13
15 13
18 13
20 13
22 13
11 12
12 12
15 12
18 12
19 12
23 12
12 11
15 11
18 11
24 11
```

```output1
20
9 15 12 12 15 15 12 18
15 20 12 17 15 14 18 17
23 22 19 22 19 12 23 12
23 14 22 15 21 14 22 13
10 14 10 13 12 13 12 14
11 11 12 11 12 12 11 12
18 20 15 20 15 19 18 19
19 16 22 19 21 20 18 17
12 19 12 18 15 18 15 19
15 22 12 19 15 16 18 19
14 22 15 22 15 24 14 24
15 8 18 11 15 14 12 11
10 15 9 15 9 14 10 14
11 18 12 19 10 21 9 20
22 23 20 21 21 20 23 22
21 15 18 15 18 14 21 14
15 26 13 24 15 22 17 24
20 20 16 24 14 22 18 18
21 17 18 20 15 17 18 14
11 14 10 13 11 12 12 13
```