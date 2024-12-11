## 問題文

サイズが $H \times W$ の長方形の土地があります。この土地はサイズ $1 \times 1$ の正方形の**区画**に分割されており、区画と区画の境界は一部が**水路**となっています。また、土地の外周は柵で囲まれており、外周に一箇所だけ設置されている**出入口**からのみ出入りできます。出入口はいずれか一つの区画の一辺に含まれており、複数の区画にまたがることはありません。

![](data:image/png;base64,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)

あなたはこの土地を使って**作物**を育てたいと考えました。ある区画で作物を植えたり収穫したりするときは農機を使うので、出入口からその区画まで農機を移動させる必要があります。ただし、農機が通るための通路は設置されていません。

これから通路を整備するのは大変なため、あなたは作物を栽培中ではない区画だけを通って農機を移動させることにしました。すなわち、ある区画に作物を植えるときやある区画から作物を収穫するときは、出入口から目的の区画まで以下の条件のもとで到達できなければなりません。

- 各区画からは隣接する4区画にのみ移動できる（斜めには移動できない）
- ただし、境界が水路であるような二つの区画の間は直接移動できない
- 栽培中の区画を通ってはならない

これから $T$ ヶ月の間に栽培する作物の候補が $K$ 種類あり、$1, 2, \dots, K$ と番号が付けられています。作物 $k$ を栽培するには、$S_k$ ヶ月目までに植える必要があります。また、作物 $k$ は $D_k$ ヶ月目に収穫する必要があります。作物 $k$ を $S_k$ ヶ月目より早く植えることは可能ですが、その場合でも $D_k$ ヶ月目より早く収穫することはできません。

どの作物をどの区画で栽培してもかまいませんが、一つの作物を複数の区画で栽培したり、複数の作物を一つの区画で同時に栽培したりすることはできません。

なるべく多くの区画を有効に利用できるような計画を立ててください。

### 土地情報の詳細

土地は北西の角の座標が $(0, 0)$、南西の角の座標が $(H, 0)$、北東の角の座標が $(0, W)$、南東の角の座標が $(H, W)$ です。北から $i+1$ 番目、西から $j+1$ 番目の区画は点 $(i, j)$ と点 $(i + 1, j + 1)$ を対角線とする正方形であり、これを区画 $(i, j)$ と呼ぶことにします($0 \le i \le H - 1$, $0 \le j \le W - 1$)。

出入口は区画 $(i_0, 0)$ の西側の境界部分（言い換えると、点 $(i_0, 0)$ と点 $(i_0 + 1, 0)$ を結ぶ線分上）にあります。

辺を共有する2区画の境界のそれぞれについて、その部分に水路があるかどうかが指定されます。水路の情報のフォーマットは「入力」のセクションを参照してください。

### 計画の詳細

計画は、どの作物をどの区画で作り、何ヶ月目に植えるかの情報からなり、列 $(k_1, i_1, j_1, s_1), \dots, (k_M, i_M, j_M, s_M)$ で表されます。この列の $m$ 番目の要素は、作物 $k_m$ を区画 $(i_m, j_m)$ で $s_m$ ヶ月目に植えることを意味します。

計画が与えられたとき、$t$ ヶ月目 ($t = 1, 2, \dots, T$) には以下のことを行います。

1. $t$ ヶ月目の始めに、$s_m = t$ を満たすすべての $m$ について、$k_m$ を $(i_m, j_m)$ に植える。このとき、各 $m$ について出入口から $(i_m, j_m)$ まで水路や栽培中の区画を通ることなく移動できなければならない。
2. $t$ ヶ月目の終わりに、$D_{k_m} = t$ を満たすすべての $m$ について、$k_m$ を $(i_m, j_m)$ から収穫する。このとき、各 $m$ について出入口から $(i_m, j_m)$ まで水路や栽培中の区画を通ることなく移動できなければならない。

なお、同じ月に複数の作物を植えるとき、植える順番によって上の条件が満たされるかどうかが変わることがあります。例えば、作物 $k_1$ と $k_2$ を同じ月に植えたく、かつ $(i_1, j_1)$ を通らないと $(i_2, j_2)$ に移動できない場合、先に $k_1$ を植えると $k_2$ が植えられなくなります。

このような場合は、各月ごとの植える順番を適切に決めることですべての作物を植えられるなら、実行可能な計画と判定されます。そのような順番が存在するかどうかはジャッジにより判定されるため、計画中で植える順番を指定する必要はありません。同じ月に複数の作物を収穫する場合も同様に、収穫する適切な順番が存在するかどうかはジャッジにより判定されるため、計画中で収穫の順番を指定する必要はありません。

計画は以下の条件を満たす必要があります。

- 同じ作物は一つの区画でしか作ることができない
- 一つの区画では同時に一つの作物しか作ることができない
- 作物 $k$ を植える場合は $S_k$ ヶ月目までに植えなければならない
- 作物を植えたり収穫したりする際、出入口と目的の区画の間を移動できなければならない

なお、すべての作物を植える必要はありません。

## 得点

作物 $k$ のスコア $X_k$ を以下のように定めます。

1. 作物 $k$ が計画に含まれていなければ $X_k = 0$ とする
2. 作物 $k$ が計画に含まれているとき $X_k = D_k - S_k + 1$ とする

AC の判定がされたテストケースの得点は $10^6 \times {\sum_{k = 1}^K X_k \over HWT}$ となります（この値は暫定テストとシステムテストで使用されるすべてのテストケースに対して整数になります）。AC 以外の判定がされたテストケースの得点は $0$ となります。

暫定テストでは、すべてのテストケースで AC の判定がされた場合は各テストケースの得点の合計が提出の得点となり、そうでない場合は提出の得点は $0$ となります。

システムテストでは、各テストケースの得点の合計が提出の得点となります。

最終順位はコンテスト終了後に実施されるより多くの入力に対するシステムテストにおける得点で決定されます。システムテストは CE  以外の結果を得た一番最後の提出に対してのみ行われるため、最終的に提出する解答を間違えないよう注意してください。

### テストケース数

- 暫定テスト: 50個
- システムテスト: 2000個、コンテスト終了後に [seeds.txt](https://img.atcoder.jp/ahc023/seeds.txt) (sha256=0c2ffe8037c0c232ed9775b89a892fc1f68709a1582c83fd6bb609244cefcf32) を公開

システムテストのテストケースには水路の生成に使用するパラメータ $d$ が $1, 2, 3, 4$ のものがそれぞれ同数ずつ含まれます（詳細は入力生成方法を参照してください）。

### 実行時間について

実行時間には多少のブレが生じます。また、システムテストでは同時に大量の実行を行うため、暫定テストに比べて数%程度実行時間が伸びる現象が確認されています。 そのため、実行時間制限ギリギリの提出がシステムテストで TLE となる可能性があります。プログラム内で時間を計測して処理を打ち切るか、実行時間に余裕を持たせるようお願いします。

## 入力

入力は以下のフォーマットで標準入力から与えられます。

> $T$ $H$ $W$ $i_0$
> 
> $h_{0, 0}h_{0, 1}\cdots h_{0, W-1}$
> 
> $\vdots$
> 
> $h_{H-2, 0}h_{H-2, 1}\cdots h_{H-2, W-1}$
> 
> $v_{0, 0}v_{0, 1}\cdots v_{0, W-2}$
> 
> $\vdots$
> 
> $v_{H-1, 0}v_{H-1, 1}\cdots v_{H-1, W-2}$
> 
> $K$
> 
> $S_1$ $D_1$
> 
> $\vdots$
> 
> $S_K$ $D_K$

$h_{i, 0} \cdots h_{i, W-1}$ は $0$ または $1$ のみからなる $W$ 文字の文字列であり、区画 $(i, j)$ の南側（座標 $(i+1, j)$ と $(i+1, j+1)$ の間を結ぶ線分上）に水路があるときに $h_{i,j} = 1$、そうでないときに $h_{i,j} = 0$ です。

$v_{i, 0} \cdots v_{i, W-2}$ は $0$ または $1$ のみからなる $W-1$ 文字の文字列であり、区画 $(i, j)$ の東側（座標 $(i, j+1)$ と $(i+1, j+1)$ の間を結ぶ線分上）に水路があるときに $v_{i,j} = 1$、そうでないときに $v_{i,j} = 0$ です。

暫定テストおよびシステムテストに用いられる入力は「入力生成方法」のセクションに述べられている方法で生成され、以下の条件を満たします。

- $T = 100$
- $H = W = 20$
- $0 \le i_0 \le H - 1$
- $0 &lt; K \le HWT$
- $1 \le S_k &lt; D_k \le T \quad (1 \le k \le K)$
- 出入口からどの区画へも、隣接する区画への移動を繰り返すことで水路を通ることなく到達可能である

## 出力

作る作物の数を $M$、作る作物を任意の順番で並べたものを $k_1, \dots, k_M$ とし、$k_m$ を区画 $(i_m, j_m)$ で $s_m$ ヶ月目に植えるとします。

このとき、以下の形式で標準出力に出力してください。

> $M$
> 
> $k_1$ $i_1$ $j_1$ $s_1$
> 
> $\vdots$
> 
> $k_M$ $i_M$ $j_M$ $s_M$

出力は問題文中に記述されている計画の要件を満たす必要があります。満たさない場合は WA と判定されます。

## 入力生成方法

詳細

$\mathrm{rand}(L, U)$ で $L$ 以上 $U$ 未満の実数を一様ランダムに生成する関数を表す。また平均 $\mu$、分散 $\sigma^2$ の[正規分布](https://ja.wikipedia.org/wiki/%E6%AD%A3%E8%A6%8F%E5%88%86%E5%B8%83)から実数値をランダムに生成する関数を $\mathrm{normal}(\mu, \sigma^2)$ で表す。

- $T = 100$
- $H = W = 20$
- $0 \le i_0 \le H - 1$ となるように $i_0$ を一様ランダムに選ぶ
- 土地（外周も含む）に含まれる格子点を頂点とし、距離 $1$ の頂点間すべてに辺を張ってできる無向グラフを $G = (V, E)$ とする。つまり $V, E$ は以下のように定義される。-   - $V = \lbrace(i, j) \mid 0 \le i \le H, 0 \le j \le W\rbrace$
-   - $E = \lbrace((i_1, j_1), (i_2, j_2)) \in V \times V \mid |i_1 - i_2| + |j_1 - j_2| = 1\rbrace$
- $G$ を使って以下のように水路を生成する。-   - $d = 1 + (\mathit{seed} \bmod 4)$
-   - 外周に含まれる点（すなわち、$i = 0, i = H, j = 0, j = W$ のいずれかを満たす $(i, j) \in V$）すべてにマークを付ける
-   - 以下の処理を繰り返す-   -   - $V'$ をこの時点でマークの付いている点全体の集合、$V'' = \lbrace (i', j') \in V \mid \forall (i, j) \in V', |i - i'| + |j - j'| &amp;amp;gt; d \rbrace$ とする
-   -   - $V''$ が空なら水路の生成を終了する。空でないなら $V''$ の要素を一様ランダムに一つ選んで $(i, j)$ とする。
-   -   - $V'$ の点のうち、$G$ において $(i, j)$ から最も近い点を $(i', j')$ とする。最も近い点が複数ある場合は、その中から一様ランダムに選ぶ。
-   -   - $(i, j)$ と $(i', j')$ の間の $G$ における最短路を $P$ とする。最短路が複数ある場合は、向きを変える回数が最も少ないもの（最大2通りある）の中から一様ランダムに選ぶ。
-   -   - $P$ に含まれるすべての辺を水路にする
-   -   - $P$ に含まれるすべての頂点にマークを付ける
- $L = \mathrm{round}(HWT \times \mathrm{rand(1.0, 2.0)})$ とする。$k = 1, 2, \dots$ に対して以下を繰り返すことで $D_k, S_k$ を生成する。-   - $L_k = \mathrm{round}(10^{\mathrm{normal}(1, 0.25^2)})$ とする。ただし $2 \le L_k \le T$ を満たさなかったら $L_k$ の生成をやり直す。
-   - $D_k$ を $L_k \le D_k \le T$ の範囲で一様ランダムに生成する
-   - $S_k = D_k - L_k + 1$ とする
-   - $\sum_{i = 1}^k L_i \ge L$ なら生成を終了する

## ツール

- [Web版](https://img.atcoder.jp/ahc023/5XtyY7PgVPtBANvV.html): ローカル版より高性能でアニメーション表示が可能です。
- [ローカル版](https://img.atcoder.jp/ahc023/asprocon10_5XtyY7PgVPtBANvV.zip): 使用するには[Rust言語](https://www.rust-lang.org/ja)のコンパイル環境をご用意下さい。-   - [Windows用のコンパイル済みバイナリ](https://img.atcoder.jp/ahc023/asprocon10_5XtyY7PgVPtBANvV_windows.zip): Rust言語の環境構築が面倒な方は代わりにこちらをご利用下さい。
- [サンプルコード(C++)](https://img.atcoder.jp/ahc023/5XtyY7PgVPtBANvV_sample.zip): 最初の $\min(K, 10)$ 個の作物について、植えられる区画を探して最初に見つかった区画に植える処理を実装しています。

<font color="red">**コンテスト終了までビジュアライズ結果の共有は禁止されています。ご注意下さい。**</font>

```input1
10 6 6 3
011010
000001
011000
000110
011000
00000
10001
10010
00110
10101
10000
20
2 10
1 10
4 10
1 10
2 9
4 5
2 8
4 10
4 9
1 9
1 3
1 6
1 7
3 6
8 10
1 7
3 8
2 8
1 10
2 10
```

```output1
12
1 0 0 2
2 0 1 1
3 1 0 4
4 0 2 1
5 3 1 2
6 2 0 4
7 4 0 2
10 3 2 1
15 2 0 8
18 5 0 2
19 0 3 1
20 4 1 2
```

このサンプルは入出力の例を示すための、採点に使われる入力データよりも小さいものです。