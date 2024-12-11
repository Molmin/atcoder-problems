配点 : $200$ 点

## 問題文

AtCoder国には $N$ 個の山があり、$i$ 個目の山の名前は $S_i$, 高さは $T_i$ です。

$2$ 番目に高い山の名前を答えてください。$N$ 個の山の名前、高さはそれぞれ相異なることが保証されます。

## 制約

- $2 \leq N \leq 1000$
- $1 \leq (S_i$ の長さ${}) \leq 15$
- $1 \leq T_i \leq 10^5$
- $S_i \neq S_j \ (i \neq j)$
- $T_i \neq T_j \ (i \neq j)$
- $S_i$ は英小文字、英大文字、数字のみからなる
- $N,\ T_i$ は整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $S_1$ $T_1$
> 
> $S_2$ $T_2$
> 
> $\vdots$
> 
> $S_N$ $T_N$

## 出力

$2$ 番目に高い山の名前を出力せよ。

```input1
3
Everest 8849
K2 8611
Kangchenjunga 8586
```

```output1
K2
```

世界で $2$ 番目に高い山は K2 です。

```input2
4
Kita 3193
Aino 3189
Fuji 3776
Okuhotaka 3190
```

```output2
Kita
```

日本で $2$ 番目に高い山は北岳です。

```input3
4
QCFium 2846
chokudai 2992
kyoprofriends 2432
penguinman 2390
```

```output3
QCFium
```