配点 : $300$ 点

## 問題文

数 $X$ を $Y$ 回掛けたものを「$X$ の $Y$ 乗」といい、$\text{pow}(X,Y)$ で表します。
例えば $\text{pow}(2,3)=2\times 2\times 2=8$ です。

$3$ つの整数 $A,B,C$ が与えられるので、$\text{pow}(A,C)$ と $\text{pow}(B,C)$ の大小を比較してください。

## 制約

- $-10^9 \leq A,B \leq 10^9$
- $1 \leq C \leq 10^9$
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $A$ $B$ $C$

## 出力

$\text{pow}(A,C)&lt; \text{pow}(B,C)$ なら `&amp;lt;` を、$\text{pow}(A,C) &gt; \text{pow}(B,C)$ なら `&amp;gt;` を、$\text{pow}(A,C)=\text{pow}(B,C)$ なら `=` を出力せよ。

```input1
3 2 4
```

```output1
>
```

$\text{pow}(3,4)=81$,  $\text{pow}(2,4)=16$ です。

```input2
-7 7 2
```

```output2
=
```

$\text{pow}(-7,2)=49$,  $\text{pow}(7,2)=49$ です。

```input3
-8 6 3
```

```output3
<
```

$\text{pow}(-8,3)=-512$,  $\text{pow}(6,3)=216$ です。