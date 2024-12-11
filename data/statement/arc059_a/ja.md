配点 : $200$ 点

## 問題文

$N$ 個の整数 $a_1,a_2,..,a_N$ が与えられます。えび君はこれらを書き換えて全て同じ**整数**にしようとしています。各$a_i (1 \leq i \leq N)$は高々一回しか書き換えられません(書き換えなくても良い)。整数$x$を整数$y$に書き換えるとき、コストが$(x-y)^2$かかります。仮に$a_i=a_j (i \neq j)$だとしても、ひとつ分のコストで同時に書き換えることは出来ません(入出力例$2$ を参照)。えび君が目的を達成するのに必要なコストの総和の最小値を求めてください。

## 制約

- $1 \leq N \leq 100$
- $-100 \leq a_i \leq 100$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $a_1$ $a_2$ ... $a_N$

## 出力

えび君が全てを同じ整数に書き換えるのに必要なコストの総和の最小値を出力せよ。

```input1
2
4 8
```

```output1
8
```

全てを$6$に書き換えると、コストの総和は$(4-6)^2+(8-6)^2=8$となり、これが最小です。

```input2
3
1 1 3
```

```output2
3
```

全てを$2$に書き換えると$(1-2)^2+(1-2)^2+(3-2)^2=3$となります。各$a_i$ごとに書き換えるので、二つの$1$を一度にコスト$(1-2)^2$で書き換えられるわけではないことに注意してください。

```input3
3
4 2 5
```

```output3
5
```

$4$は書き換えずに、$2$と$5$を共に$4$に書き換えることで$(2-4)^2+(5-4)^2=5$が達成できて、これが最小です。

```input4
4
-100 -100 -100 -100
```

```output4
0
```

何も書き換えなくともえび君は目的を達成しています。よってこの場合コストは$0$です。