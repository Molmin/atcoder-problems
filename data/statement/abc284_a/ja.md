配点 : $100$ 点

## 問題文

$N$ 個の文字列 $S_1,S_2,\ldots,S_N$ がこの順番で与えられます。

$S_N,S_{N-1},\ldots,S_1$ の順番で出力してください。

## 制約

- $1\leq N \leq 10$
- $N$ は整数
- $S_i$ は英小文字、英大文字、数字からなる長さ $1$ 以上 $10$ 以下の文字列

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$

## 出力

$N$ 行出力せよ。
$i\ (1\leq i \leq N)$ 行目には、$S_{N+1-i}$ を出力せよ。

```input1
3
Takahashi
Aoki
Snuke
```

```output1
Snuke
Aoki
Takahashi
```

$N=3$、$S_1=$ `Takahashi`、$S_2=$ `Aoki`、$S_3=$ `Snuke` です。

よって、`Snuke`、`Aoki`、`Takahashi` の順で出力します。

```input2
4
2023
Year
New
Happy
```

```output2
Happy
New
Year
2023
```

与えられる文字列が数字を含むこともあります。