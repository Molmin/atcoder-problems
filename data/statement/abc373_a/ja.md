配点 : $100$ 点

## 問題文

英小文字からなる $12$ 個の文字列 $S_1,S_2,\ldots,S_{12}$ があります。

$S_i$ の長さが $i$ であるような整数 $i$ $(1 \leq i \leq 12)$ がいくつあるか求めてください。

## 制約

- $S_i$ は英小文字からなる長さ $1$ 以上 $100$ 以下の文字列である。$(1 \leq i \leq 12)$

## 入力

入力は以下の形式で標準入力から与えられる。

> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_{12}$

## 出力

$S_i$ の長さが $i$ であるような整数 $i$ $(1 \leq i \leq 12)$ がいくつあるか出力せよ。

```input1
january
february
march
april
may
june
july
august
september
october
november
december
```

```output1
1
```

$S_i$ の長さが $i$ であるような整数 $i$ は $9$ の $1$ つのみです。よって、`1` と出力します。

```input2
ve
inrtfa
npccxva
djiq
lmbkktngaovl
mlfiv
fmbvcmuxuwggfq
qgmtwxmb
jii
ts
bfxrvs
eqvy
```

```output2
2
```

$S_i$ の長さが $i$ であるような整数 $i$ は $4,8$ の $2$ つです。よって、`2` と出力します。