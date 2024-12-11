配点 : $300$ 点

## 問題文

高橋君と青木君は、それぞれ $N$ 個のボールに $M$ 本のひもを取り付けたおもちゃを持っています。

高橋君のおもちゃにおいて、ボールには $1, \dots, N$ と番号が付けられており、$i \, (1 \leq i \leq M)$ 本目のひもはボール $A_i$ とボール $B_i$ を結んでいます。

青木君のおもちゃにおいても同様に、ボールには $1, \dots, N$ と番号が付けられており、$i \, (1 \leq i \leq M)$ 本目のひもはボール $C_i$ とボール $D_i$ を結んでいます。

それぞれのおもちゃにおいて、同一のボールを結ぶようなひもは存在せず、$2$ つのボールを $2$ 本以上の異なるひもが結んでいることはありません。

すぬけ君は、$2$ 人のおもちゃが同じ形であるかどうか気になっています。<br>
ここで、$2$ 人のおもちゃが同じ形であるとは、以下の条件を満たす数列 $P$ が存在することをいいます。

- $P$ は $(1, \dots, N)$ を並べ替えて得られる。
- 任意の $1$ 以上 $N$ 以下の整数 $i, j$ に対し、以下が成り立つ。-   - 高橋君のおもちゃにおいてボール $i, j$ がひもで繋がれていることと、青木君のおもちゃにおいてボール $P_i, P_j$ がひもで繋がれていることは同値である。

$2$ 人のおもちゃが同じ形であるなら `Yes`、そうでないなら `No` と出力してください。

## 制約

- $1 \leq N \leq 8$
- $0 \leq M \leq \frac{N(N - 1)}{2}$
- $1 \leq A_i \lt B_i \leq N \, (1 \leq i \leq M)$
- $(A_i, B_i) \neq (A_j, B_j) \, (i \neq j)$
- $1 \leq C_i \lt D_i \leq N \, (1 \leq i \leq M)$
- $(C_i, D_i) \neq (C_j, D_j) \, (i \neq j)$
- 入力は全て整数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $A_1$ $B_1$
> 
> $\vdots$
> 
> $A_M$ $B_M$
> 
> $C_1$ $D_1$
> 
> $\vdots$
> 
> $C_M$ $D_M$

## 出力

$2$ 人のおもちゃが同じ形であるなら `Yes`、そうでないなら `No` と出力せよ。

```input1
4 4
1 2
1 3
1 4
3 4
1 3
1 4
2 3
3 4
```

```output1
Yes
```

高橋君のおもちゃは下図の左側のような形をしており、青木君のおもちゃは下図の右側のような形をしています。

![yes1](https://img.atcoder.jp/ghi/abc232c_yes1.jpg)

次の図から、$2$ 人のおもちゃが同じ形であることがわかります。例えば $P = (3, 2, 1, 4)$ とすると問題文中の条件を満たします。

![yes2](https://img.atcoder.jp/ghi/abc232c_yes2.jpg)

```input2
5 6
1 2
1 3
1 4
3 4
3 5
4 5
1 2
1 3
1 4
1 5
3 5
4 5
```

```output2
No
```

$2$ 人のおもちゃは同じ形ではありません。

![no](https://img.atcoder.jp/ghi/abc232c_no.jpg)

```input3
8 0
```

```output3
Yes
```