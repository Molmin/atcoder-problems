配点 : $600$ 点

## 問題文

$xy$ -平面上の凸 $N$ 角形 $P$ の頂点が、**反時計回り**に $(x_1, y_1), (x_2, y_2), \ldots, (x_N, y_N)$ として与えられます。（ただし、$x$ 軸の正の方向を右向き、$y$ 軸の正の方向を上向きとします。）

この多角形 $P$ に対して、$M$ 個の凸 $N$ 多角形 $P_1, P_2, \ldots, P_M$ を考えます。<br>
$i = 1, 2, \ldots, M$ について多角形 $P_i$ は、 多角形 $P$ を $x$ 軸の正の方向に $u_i$ 、$y$ 軸の正の方向に $v_i$ だけ平行移動して得られる多角形です。すなわち、$P_i$ は $N$ 個の点 $(x_1+u_i, y_1+v_i), (x_2+u_i, y_2+v_i), \ldots, (x_N+u_i, y_N+v_i)$ を頂点とする凸 $N$ 角形です。

$Q$ 個の点 $(a_1, b_1), (a_2, b_2), \ldots, (a_Q, b_Q)$ のそれぞれについて、
「その点が $M$ 個の多角形 $P_1, P_2, \ldots, P_M$ のすべてに含まれるか」を判定してください。

ただし、点が多角形の境界上にある場合も、その点はその多角形に含まれるとみなします。

## 制約

- $3 \leq N \leq 50$
- $1 \leq M \leq 2 \times 10^5$
- $1 \leq Q \leq 2 \times 10^5$
- $-10^8 \leq x_i, y_i \leq 10^8$
- $-10^8 \leq u_i, v_i \leq 10^8$
- $-10^8 \leq a_i, b_i \leq 10^8$
- 入力はすべて整数
- $(x_1, y_1), (x_2, y_2), \ldots, (x_N, y_N)$ は反時計回りに凸多角形をなす
- 多角形 $P$ のそれぞれの内角の大きさは $180$ 度未満

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $x_1$ $y_1$
> 
> $x_2$ $y_2$
> 
> $\vdots$
> 
> $x_N$ $y_N$
> 
> $M$
> 
> $u_1$ $v_1$
> 
> $u_2$ $v_2$
> 
> $\vdots$
> 
> $u_M$ $v_M$
> 
> $Q$
> 
> $a_1$ $b_1$
> 
> $a_2$ $b_2$
> 
> $\vdots$
> 
> $a_Q$ $b_Q$

## 出力

$Q$ 行出力せよ。$i = 1, 2, \ldots, Q$ について、$i$ 行目には点 $(a_i, b_i)$ が $M$ 個の多角形 $P_1, P_2, \ldots, P_M$ のすべてに含まれる場合は `Yes` を、そうでない場合は `No` を出力せよ。

```input1
5
-2 -3
0 -2
1 0
0 2
-2 1
2
0 1
1 0
6
0 0
1 0
0 1
1 1
-1 -1
-1 -2
```

```output1
Yes
No
Yes
Yes
Yes
No
```

多角形 $P$ は $(-2, -3), (0, -2), (1, 0), (0, 2), (-2, 1)$ を頂点とする $5$ 角形です。

- 多角形 $P_1$ は、$P$ を $x$ 軸の正の方向に $0$ 、$y$ 軸の正の方向に $1$ だけ平行移動させた、$(-2, -2), (0, -1), (1, 1), (0, 3), (-2, 2)$ を頂点とする $5$ 角形です。
- 多角形 $P_2$ は、$P$ を $x$ 軸の正の方向に $1$ 、$y$ 軸の正の方向に $0$ だけ平行移動させた、$(-1, -3), (1, -2), (2, 0), (1, 2), (-1, 1)$ を頂点とする $5$ 角形です。

よって、下記の通りに $6$ 行出力します。

- $(a_1, b_1) = (0, 0)$ は $P_1$ と $P_2$ の両方に含まれるので、$1$ 行目には `Yes` を出力します。
- $(a_2, b_2) = (1, 0)$ は $P_2$ には含まれますが $P_1$ には含まれないので、$2$ 行目には `No` を出力します。
- $(a_3, b_3) = (0, 1)$ は $P_1$ と $P_2$ の両方に含まれるので、$3$ 行目には `Yes` を出力します。
- $(a_4, b_4) = (1, 1)$ は $P_1$ と $P_2$ の両方に含まれるので、$4$ 行目には `Yes` を出力します。
- $(a_5, b_5) = (-1, -1)$ は $P_1$ と $P_2$ の両方に含まれるので、$5$ 行目には `Yes` を出力します。
- $(a_6, b_6) = (-1, -2)$ は $P_2$ には含まれますが $P_1$ には含まれないので、$6$ 行目には `No` を出力します。

多角形の境界上にある点も多角形に含まれるとみなすことに注意してください。

![](https://img.atcoder.jp/abc251/8216bd194340d2648ce000e9ac9a203e.png)

```input2
10
45 100
-60 98
-95 62
-95 28
-78 -41
-54 -92
-8 -99
87 -94
98 23
87 91
5
-57 -40
-21 -67
25 39
-30 25
39 -20
16
4 5
-34 -8
-63 53
78 84
19 -16
64 9
-13 7
13 53
-20 4
2 -7
3 18
-12 10
-69 -93
2 9
27 64
-92 -100
```

```output2
Yes
Yes
No
No
Yes
No
Yes
No
Yes
Yes
Yes
Yes
No
Yes
No
No
```