配点 : $200$ 点

## 問題文

すぬけ君はボールが入った箱を売っている店に行きました。
売っている箱は以下の $3$ 種類です。

- $R$ 個のボールが入った赤色の箱
- $G$ 個のボールが入った緑色の箱
- $B$ 個のボールが入った青色の箱

すぬけ君は赤色の箱を $r$ 個、緑色の箱を $g$ 個、青色の箱を $b$ 個買うことで合計でちょうど $N$ 個のボールが手に入るようにしたいです。
これを達成する非負整数の組 $(r,g,b)$ はいくつありますか？

## 制約

- 入力は全て整数
- $1 \leq R,G,B,N \leq 3000$

## 入力

入力は以下の形式で標準入力から与えられる。

> $R$ $G$ $B$ $N$

## 出力

答えを出力せよ。

```input1
1 2 3 4
```

```output1
4
```

条件を満たすのは以下の $4$ 通りです。

- $(4,0,0)$
- $(2,1,0)$
- $(1,0,1)$
- $(0,2,0)$

```input2
13 1 4 3000
```

```output2
87058
```