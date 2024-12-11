配点 : $1400$ 点

## 問題文

高橋君は $N$ 項からなる数列 $(A_1,A_2,...,A_N)$ を拾いました。数列を全部持ち帰るのは大変なので、高橋君は圧縮して一つの数にすることに決めました。

圧縮は $N-1$ 回のステップからなり、各ステップごとに今ある数列を、長さが $1$ 短い数列に圧縮します。ステップでの操作を表す文字列を $S$ として、今ある数列を $(a_1,a_2,...,a_K)$ とするとき、$i$ 回目のステップでは以下の操作を行います。

- $S$ の $i$ 文字目が `M` のとき、$b_i = max(a_i,a_{i+1})$ $(1 \leq i \leq K-1)$ として、数列を $(b_1,b_2,...,b_{K-1})$ に圧縮する
- $S$ の $i$ 文字目が `m` のとき、$b_i = min(a_i,a_{i+1})$ $(1 \leq i \leq K-1)$ として、数列を $(b_1,b_2,...,b_{K-1})$ に圧縮する

さて、高橋君は圧縮するステップの操作を表す文字列 $S$ を決めましたが、疲れていて実際に圧縮することができません。代わりに、圧縮して得られる数を求めてください。

## 制約

- $2 \leq N \leq 10^5$
- $1 \leq A_i \leq N$
- $S$ は $N-1$ 文字からなり、各文字は `M` または `m` である。

## 部分点

- $400$ 点分のデータセットでは、ある $i (1 \leq i &lt; N-1)$ が存在して、$S$ の最初の $i$ 文字が `M`、その他の文字が `m` である。すなわち、$S$ は `M...Mm...m` のようになる。
- $800$ 点分のデータセットでは、$S$ の奇数文字目は `M` 、偶数文字目は `m` である。すなわち、$S$ は `MmMmMm...` のようになる。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $A_2$ $...$ $A_N$
> 
> $S$

## 出力

圧縮して高橋君が得られる数を出力せよ。

## 入力例1

```plain
4
1 2 3 4
MmM
```

## 出力例1

```plain
3
```

最初の数列が $( 1 , 2 , 3 , 4 )$ なので、

- $1$ 回目のステップでは数列 $( 2 , 3 , 4)$ に圧縮されます。
- $2$ 回目のステップでは数列 $( 2 , 3 )$ に圧縮されます。
- $3$ 回目のステップでは数列 $( 3 )$ に圧縮されます。

よって、求める数は $3$ です。

## 入力例2

```plain
5
3 4 2 2 1
MMmm
```

## 出力例2

```plain
2
```

## 入力例3

```plain
10
1 8 7 6 8 5 2 2 6 1
MmmmmMMMm
```

## 出力例3

```plain
5
```

## 入力例4

```plain
20
12 7 16 8 7 19 8 19 20 11 7 13 20 3 4 11 19 11 15 5
mMMmmmMMMMMMmMmmmMM
```

## 出力例4

```plain
11
```