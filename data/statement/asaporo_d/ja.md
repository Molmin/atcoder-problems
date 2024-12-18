配点 : $700$ 点

## 問題文

高橋君の家にはパネルが一列に $N$ 個並んでおり、$1,2,...,N$ と順に番号がついています。パネル $i$ には数 $A_i$ が書いてあり、高橋君はこれらのパネルに球を当てて遊んでいます。

高橋君は球を $K$ 回投げました。高橋君は $i$ 回目に球を当てたパネルをパネル $p_i$ としたとき、このゲームの得点を $i \times A_{p_i}$ の和と定めました。

さて、高橋君は $K$ 回球を投げ終わり得点を計算しようとしましたが、自分が当てたパネル $p_1,p_2,...,p_K$ を忘れてしまいました。高橋君は唯一、 $1 \leq i \leq K-1$ を満たすすべての $i$ に対して $1 \leq p_{i+1}-p_i \leq M$ が成り立っていたことを覚えています。この情報をもとに高橋君の得点として考えられる最大値を求めてください。

## 制約

- $1 \leq M \leq N \leq 10^5$
- $1 \leq K \leq min(300,N)$
- $1 \leq A_i \leq 10^{9}$

## 部分点

- $100$ 点分のデータセットでは、$M = N$ が成り立つ。
- $200$ 点分のデータセットでは、$N \leq 300 , K \leq 30$ が成り立つ。
- $300$ 点分のデータセットでは、$K \leq 30$ が成り立つ。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$ $K$
> 
> $A_1$ $A_2$ $...$ $A_N$

## 出力

高橋君の得点として考えられる最大値を出力せよ。

## 入力例1

```plain
5 2 3
10 2 8 10 2
```

## 出力例1

```plain
56
```

$1,3,4$ のパネルにこの順に当てたとき、最大となります。

## 入力例2

```plain
5 5 2
5 2 10 5 9
```

## 出力例2

```plain
28
```

この入力は $M = N$ の部分点の制約を満たします。

## 入力例3

```plain
10 3 5
3 7 2 6 9 4 8 5 1 1000000000
```

## 出力例3

```plain
5000000078
```