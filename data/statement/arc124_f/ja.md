配点 : $900$ 点

## 問題文

$H$ 行 $W$ 列のマス目が与えられます。
このマス目の上から $i$ 行目、左から $j$ 列目のマスを $(i,j)$ とします。

はじめ、マス $(1,1)$ にラクダが、マス $(H,1)$ に猫がいます。

あなたは以下の $4$ 種類の命令を送ることができます。

- `R`: $(i,j)$ にいるラクダを $(i,j+1)$ に移動させる
- `D`: $(i,j)$ にいるラクダを $(i+1,j)$ に移動させる
- `r`: $(i,j)$ にいる猫を $(i,j+1)$ に移動させる
- `u`: $(i,j)$ にいる猫を $(i-1,j)$ に移動させる

以下の $4$ つの条件全てを満たす命令列を *よい命令列* といいます。よい命令列の個数を $998244353$ で割ったあまりを求めてください。

1. ラクダが最終的に $(H,W)$ に到達する
2. 猫が最終的に $(1,W)$ に到達する
3. ラクダと猫が命令による移動後、同じマスにいるということが **ちょうど** $1$ 回ある
4. ラクダや猫がマス目から出ることはない

## 制約

- 与えられる入力は全て整数
- $2 \leq H,W \leq 2 \times 10^{5}$

## 入力

入力は以下の形式で標準入力から与えられる。

> $H$ $W$

## 出力

よい命令列の個数を $998244353$ で割ったあまりを出力せよ。

```input1
2 2
```

```output1
16
```

- 例えば `DRur`、`DurR`、`RruD`、`RDru` はよい命令列ですが、`DRru`、`RRR` などはよい命令列ではありません。

```input2
200000 200000
```

```output2
412709667
```

- $998244353$ で割ったあまりを出力するのを忘れずに。