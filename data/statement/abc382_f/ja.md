配点 : $525$ 点

## 問題文

$H$ 行 $W$ 列のグリッドがあります。
このグリッドの上から $i\ (1\leq i\leq H)$ 行目、左から $j\ (1\leq j\leq W)$ 列目のマスを $(i,j)$ と表記します。

$1$ から $N$ までの番号が付けられた $N$ 個の横長のバーがグリッド上に置かれています。
バー $i$ は $1\times 1$ のブロックが横に $L_i$ 個繋がった形をしており、その左端のブロックは最初マス $(R_i,C_i)$ 上にあります。
すなわち、バー $i$ は最初マス $(R_i,C_i), (R_i,C_i+1), \dots, (R_i,C_i+L_i-1)$ を占めています。
ここで、相異なる $2$ つのバーに占められているマスは存在しないことが保証されます。

現在の時刻は $t=0$ です。
非負整数 $n$ を用いて $t=0.5+n$ と表されるようなすべての時刻において、$i=1,2,\dots,N$ の順に以下のことが起こります。

- バー $i$ が一番下の行（$H$ 行目）になく、かつバー $i$ が占める各マスの $1$ つ下のマスをどのバーも占めていない場合、バー $i$ 全体が $1$ マス分下に移動する。
すなわち、その時点でバー $i$ が占めているマスが $(r,C_i),(r,C_i+1),\dots,(r,C_i+L_i-1)\ (r &lt; H)$ であり、どの $j\ (0\leq j\leq L_i-1)$ についてもマス $(r+1,C_i+j)$ を占めているバーが存在しないならば、
バー $i$ の占めるマスが $(r+1,C_i),(r+1,C_i+1),\dots,(r+1,C_i+L_i-1)$ に変化する。
- そうでないならば、何も起こらない。

$t=10^{100}$ においてバー $i$ が占めているマスを $(R'_i,C_i), (R'_i,C_i+1), \dots, (R'_i,C_i+L_i-1)$ とします。
$R'_1,R'_2,\dots,R'_N$ を求めてください。

## 制約

- $1\leq H,W \leq 2\times 10^5$
- $1\leq N \leq 2\times 10^5$
- $1\leq R_i\leq H$
- $1\leq C_i\leq W$
- $1\leq L_i\leq W-C_i+1$
- 与えられる初期状態において、相異なる $2$ つのバーに占められているマスは存在しない
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $H$ $W$ $N$
> 
> $R_1$ $C_1$ $L_1$
> 
> $R_2$ $C_2$ $L_2$
> 
> $\vdots$
> 
> $R_N$ $C_N$ $L_N$

## 出力

$N$ 行出力せよ。
$i\ (1\leq i \leq N)$ 行目には、$R'_i$ を出力せよ。

```input1
4 4 4
1 2 3
3 2 2
2 1 2
2 4 1
```

```output1
2
4
3
4
```

以下の $3$ つの図は左から順に $t=0,1,2$ でのグリッドの様子を表しています。
色の塗られた長方形は各バーを表し、長方形の中に書かれた数字はそのバーの番号です。

![](https://img.atcoder.jp/abc382/57581b182e43915bce2b78747acfa2a6.png)

グリッドの状態の変化は以下の通り説明されます。

- $t=0.5$:-   - $i=1$: バー $1$ が占める各マスの $1$ つ下のマスである $(2,2),(2,3),(2,4)$ のうち、$(2,2)$ がバー $3$ に、$(2,4)$ がバー $4$ にそれぞれ占められているため、何も起こらない。
-   - $i=2$: バー $2$ が占める各マスの $1$ つ下のマスである $(4,2),(4,3)$ がいずれも他のバーに占められていないため、バー $2$ 全体が $1$ マス分下に移動する。
-   - $i=3$: バー $3$ が占める各マスの $1$ つ下のマスである $(3,1),(3,2)$ がいずれも他のバーに占められていないため、バー $3$ 全体が $1$ マス分下に移動する。
-   - $i=4$: バー $4$ が占めるマスの $1$ つ下のマスである $(3,4)$ が他のバーに占められていないため、バー $4$ 全体が $1$ マス分下に移動する。
- $t=1.5$:-   - $i=1$: バー $1$ が占める各マスの $1$ つ下のマスである $(2,2),(2,3),(2,4)$ がいずれも他のバーに占められていないため、バー $1$ 全体が $1$ マス分下に移動する。
-   - $i=2$: バー $2$ は一番下の行にあるため、何も起こらない。
-   - $i=3$: バー $3$ が占める各マスの $1$ つ下のマスである $(4,1),(4,2)$ のうち、$(4,2)$ がバー $2$ に占められているため、何も起こらない。
-   - $i=4$: バー $4$ が占めるマスの $1$ つ下のマスである $(4,4)$ が他のバーに占められていないため、バー $4$ 全体が $1$ マス分下に移動する。

$t=2.5,3.5,\dots$ においては $1$ つ下のマスがすべて空いているようなバーが存在せず、何も起こらないため、$t=10^{100}$ でのグリッドの状態は $t=2$ でのグリッドの状態（上図における一番右の状態）と同じです。

よって、$R'_1=2,R'_2=4,R'_3=3,R'_4=4$ です。

```input2
382 382 3
3 3 3
8 8 8
2 2 2
```

```output2
382
382
381
```

```input3
5 10 8
2 2 1
4 3 1
4 8 2
1 2 2
2 5 3
5 4 3
4 5 2
1 5 2
```

```output3
5
5
5
4
3
5
4
2
```