配点 : $500$ 点

## 問題文

$N$ 個の整数があります。$i$ 番目の数は $A_i$ です。

「全ての $1\leq i &lt; j \leq N$ について、$GCD(A_i,A_j)=1$」が成り立つとき、$\{A_i\}$ は pairwise coprime であるといいます。

$\{A_i\}$ が pairwise coprime ではなく、かつ、$GCD(A_1,\ldots,A_N)=1$ であるとき、$\{A_i\}$ は setwise coprime であるといいます。

$\{A_i\}$ が pairwise coprime、setwise coprime、そのどちらでもない、のいずれであるか判定してください。

ただし $GCD(\ldots)$ は最大公約数を表します。

## 制約

- $2 \leq N \leq 10^6$
- $1 \leq A_i\leq 10^6$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $\ldots$ $A_N$

## 出力

$\{A_i\}$ が pairwise coprime ならば `pairwise coprime`、setwise coprime ならば `setwise coprime`、そのどちらでもなければ `not coprime` と出力せよ。

```input1
3
3 4 5
```

```output1
pairwise coprime
```

$GCD(3,4)=GCD(3,5)=GCD(4,5)=1$ なので pairwise coprime です。

```input2
3
6 10 15
```

```output2
setwise coprime
```

$GCD(6,10)=2$ なので pairwise coprime ではありませんが、$GCD(6,10,15)=1$ なので setwise coprime です。

```input3
3
6 10 16
```

```output3
not coprime
```

$GCD(6,10,16)=2$ なので、pairwise coprime でも setwise coprime でもありません。