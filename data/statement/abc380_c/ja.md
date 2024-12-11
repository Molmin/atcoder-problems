配点 : $300$ 点

## 問題文

`0`, `1` のみからなる長さ $N$ の文字列 $S$ が与えられます。<br>
$S$ の中で先頭から $K$ 番目の `1` の塊を $K-1$ 番目の `1` の塊の直後まで移動した文字列を出力してください。

なお、$S$ には `1` の塊が $K$ 個以上含まれることが保証されます。

より正確な説明は以下の通りです。

- $S$ の $l$ 文字目から $r$ 文字目までからなる部分文字列を $S_{l\ldots r}$ と表す。
- $S$ の部分文字列 $S_{l\ldots r}$ が `1` の塊であるとは、以下の条件を全て満たすことと定める。-   - $S_l=S_{l+1}=\cdots=S_r=$ `1`
-   - $l=1$ または $S_{l-1}=$ `0`
-   - $r=N$ または $S_{r+1}=$ `0`
- $S$ に含まれる `1` の塊が $S_{l_1\ldots r_1},\ldots,S_{l_m\ldots r_m}$ で全てであり、$l_1 &lt; \cdots &lt; l_m$ を満たしているとする。<br>
  このとき、以下で定義される長さ $N$ の文字列 $T$ を、「$S$ の中で先頭から $K$ 番目の `1` の塊を $K-1$ 番目の `1` の塊の直後まで移動した文字列」と定める-   - $1 \leq i \leq r_{K-1}$ のとき $T_i = S_i$
-   - $r_{K-1}+1 \leq i \leq r_{K-1}+(r_K-l_K)+1$ のとき $T_i=$ `1`
-   - $r_{K-1}+(r_K-l_K)+2 \leq i \leq r_K$ のとき $T_i=$ `0`
-   - $r_K+1 \leq i \leq N$ のとき $T_i=S_i$

## 制約

- $1 \leq N \leq 5\times 10^5$
- $S$ は `0`, `1` のみからなる長さ $N$ の文字列
- $2 \leq K$
- $S$ には `1` の塊が $K$ 個以上含まれる

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$
> 
> $S$

## 出力

答えを出力せよ。  

```input1
15 3
010011100011001
```

```output1
010011111000001
```

$S$ には、$2$ 文字目から $2$ 文字目、$5$ 文字目から $7$ 文字目、$11$ 文字目から $12$ 文字目、$15$ 文字目から $15$ 文字目の $4$ つの `1` の塊があります。

```input2
10 2
1011111111
```

```output2
1111111110
```