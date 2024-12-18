配点 : $1000$ 点

## 問題文

あなたは、以下の条件を満たすように、長さ $3$ の数列を $N$ 個作ります。

- $k=1,2,3$ の全てに対して、次の条件が成り立つ-   - 各数列の $k$ 項目を集めたとき、$1$ から  $N$ までの整数がちょうど $1$ 回ずつ現れる

この数列の列に対して、以下のように数列 $a=(a_1,a_2, \ldots ,a_N), b=(b_1,b_2,\ldots ,b_N)$ を定義します。

- $i$ 番目の数列を $s_i$ 、$i$ 番目の数列を逆順にしたものを $t_i$ とし、これらを全て辞書順に並べた時、$s_i$ が $a_i$ 番目、$t_i$ が $b_i$ 番目である
- ただし、$2N$ 個の数列の中に同一の数列が $2$ 個以上存在する場合には、$a, b$ は定義されない

したがって、$a, b$ が定義される場合には、$a$ と $b$ を合わせた数列には $1$ から $2N$ までの整数がちょうど $1$ 回ずつ現れます。

長さ $N$ の数列 $A,B$ が与えられます。ただし、$A$ の各項は $1$ 以上 $2N$ 以下の整数であり、$B$ の各項は $1$ 以上 $2N$ 以下の整数または $-1$ です。
また、$A$ と $B$ を合わせた数列には $-1$ 以外の整数は $1$ 回以下しか現れません。

$a, b$ が定義され、$1$ 以上 $N$ 以下のすべての整数 $i$ に対して

- $a_i = A_i$
- $B_i \neq -1$ ならば $b_i = B_i$

がともに成り立つとき、あり得る数列 $a,b$ の組は何通りあるでしょうか。
答えを $998244353$ で割った余りを求めてください。

## 制約

- $2\leq N\leq 3000$
- $1\leq A_i\leq 2N$
- $1\leq B_i\leq 2N$ または $B_i=-1$
- $A$ と $B$ を合わせた数列には $-1$ 以外の整数は $1$ 回以下しか現れない。つまり、以下が成り立つ-   - $i\neq j$ のとき $A_i\neq A_j$
-   - $i\neq j$ かつ $B_i,B_j\neq -1$ のとき $B_i\neq B_j$
-   - $A_i\neq B_j$
- 入力される値はすべて整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$
> 
> $B_1$ $B_2$ $\ldots$ $B_N$

## 出力

答えを $998244353$ で割った余りを整数で出力せよ。

```input1
3
2 3 6
-1 1 -1
```

```output1
1
```

例えば、$3$ つの数列を以下のように作った場合を考えます。

1. $(1,2,3)$
2. $(2,1,1)$
3. $(3,3,2)$

このとき、$s_i$ および $t_i$ を辞書順に並べると、

$t_2=(1,1,2)&lt;s_1=(1,2,3)&lt;s_2=(2,1,1)&lt;t_3=(2,3,3)&lt;t_1=(3,2,1)&lt;s_3=(3,3,2)$

となっているため、$(a_1,a_2,a_3,b_1,b_2,b_3)=(2,3,6,5,1,4)$ です。このとき、$a$ は与えられた $A$ に一致し、$b$ の第 $2$ 項も $B$ と一致しており、これは題意を満たす数列 $a,b$ の $1$ つです。

また、$3$ つの数列を以下のように作った場合は、$s_1=t_1$ となってしまうため $a,b$ が定義されません。 

1. $(1,2,1)$
2. $(2,1,3)$
3. $(3,3,2)$

実は、題意を満たす数列は $a=(2,3,6), b=(5,1,4)$ のみです。

```input2
15
5 16 1 12 30 20 4 13 9 8 24 21 26 28 17
-1 -1 6 -1 -1 -1 -1 -1 -1 -1 -1 29 -1 -1 -1
```

```output2
758094847
```

答えを $998244353$ で割った余りを出力してください。