配点 : $400$ 点

## 問題文

$N$ 個の文字列 $S_1,\ldots,S_N$ が与えられます。各文字列は `AND` または `OR` です。

値が $\text{True}$ または $\text{False}$ であるような $N+1$ 個の変数の組 $(x_0,\ldots,x_N)$ であって、
以下のような計算を行った際に、$y_N$ が $\text{True}$ となるようなものの個数を求めてください。

- $y_0=x_0$
- $i\geq 1$ のとき、$S_i$ が `AND` なら $y_i=y_{i-1} \land x_i$、$S_i$ が `OR` なら $y_i=y_{i-1} \lor x_i$

$a \land b$ は $a$ と $b$ の論理積を表し、$a \lor b$ は $a$ と $b$ の論理和を表します。  

## 制約

- $1 \leq N \leq 60$
- $S_i$ は `AND` または `OR`

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $S_1$
> 
> $\vdots$
> 
> $S_N$

## 出力

答えを出力せよ。

```input1
2
AND
OR
```

```output1
5
```

例えば $(x_0,x_1,x_2)=(\text{True},\text{False},\text{True})$ のとき

- $y_0=x_0=\text{True}$
- $y_1=y_0 \land x_1 = \text{True} \land \text{False}=\text{False}$
- $y_2=y_1 \lor x_2 = \text{False} \lor \text{True}=\text{True}$

となり、$y_2$ は $\text{True}$ になります。

$y_2$ が $\text{True}$ となるような $(x_0,x_1,x_2)$ の組み合わせは、

- $(\text{True},\text{True},\text{True})$
- $(\text{True},\text{True},\text{False})$
- $(\text{True},\text{False},\text{True})$
- $(\text{False},\text{True},\text{True})$
- $(\text{False},\text{False},\text{True})$

の $5$ 通りで全てです。

```input2
5
OR
OR
OR
OR
OR
```

```output2
63
```

全てが $\text{False}$ のときを除く $2^6-1$ 通りで $y_5$ は $\text{True}$ になります。