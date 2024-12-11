配点 : $625$ 点

## 問題文

長さ $N$ の正整数列 $A=(A_1,A_2,\ldots,A_N),B=(B_1,B_2,\ldots,B_N),C=(C_1,C_2,\ldots,C_N)$ が与えられます。

以下の条件を満たす正整数の組 $(x,y)$ の個数を求めてください。

- 全ての $1\le i\le N$ に対して $A_i\times x+B_i\times y &lt; C_i$ が成立する。

なお、条件を満たす正整数の組の個数は有限個であることが証明できます。

$T$ 個のテストケースが与えられるので、それぞれに対して答えを求めてください。

## 制約

- $1\le T\le 2\times 10^5$
- $1\le N\le 2\times 10^5$
- $1\le A_i,B_i,C_i\le 10^9$
- 全てのテストケースにおける $N$ の総和は $2\times 10^5$ 以下である
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。ここで、$\mathrm{case}_i$ は $i$ 番目のテストケースを意味する。

> $T$
> 
> $\mathrm{case}_1$
> 
> $\mathrm{case}_2$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

各テストケースは以下の形式で与えられる。

> $N$
> 
> $A_1$ $B_1$ $C_1$
> 
> $A_2$ $B_2$ $C_2$
> 
> $\vdots$
> 
> $A_N$ $B_N$ $C_N$

## 出力

$T$ 行出力せよ。
$i$ 行目 $(1\le i\le T)$ には $\mathrm{case}_i$ に対する答えを出力せよ。

```input1
2
2
1 1 4
1 2 5
1
1 1 2
```

```output1
2
0
```

$1$ つ目のテストケースでは、条件を満たす正整数の組は $(x,y)=(1,1),(2,1)$ の $2$ つです。したがって、 $1$ 行目には $2$ を出力してください。

$2$ つ目のテストケースでは、条件を満たす正整数の組は存在しません。したがって、 $2$ 行目には $0$ を出力してください。

```input2
3
7
138 16011 918976
5478 7748 499926
5234 17727 748589
1157 10511 643136
31200 3005 721285
28839 14469 798851
1933 5378 864127
9
17775 1665 386430
37001 863 922418
9756 4182 746671
12379 9106 807578
3984 4049 640539
25333 9869 780810
20372 7000 688738
16107 11974 827227
10779 10531 770510
5
4916 14132 460944
11856 45422 610561
56014 18216 825793
10363 6220 945356
37418 33866 851593
```

```output2
660
995
140
```