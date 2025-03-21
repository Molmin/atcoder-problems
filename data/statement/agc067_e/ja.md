配点 : $1900$ 点

## 問題文

整数 $N$ と素数 $P$ が与えられます。

$1$ から $N$ までの番号がついた $N$ 頂点の連結無向グラフであって以下の条件を満たすものの個数を $P$ で割った余りを求めてください。

- $G$ に自己辺はない。なお、多重辺はあってもよい。
- $G$ のすべての辺 $(u,v)$ について、$(u,v)$ を $G$ から削除しても $G$ は連結なままである。すなわち、$G$ は二重辺連結である。
- $G$ のすべての辺 $(u,v)$ について、$(u,v)$ を $G$ から削除すると $G$ は二重辺連結でなくなる。

二つのグラフは、異なる頂点の組 $(u,v)$ であって二つのグラフで $u$ と $v$ を結ぶ辺の本数が異なるものが存在するとき、またそのときに限り異なるとします。

## 制約

- $2 \le N \le 50$
- $10^9&lt;P&lt;1.01\times 10^9$
- $P$ は素数である。
- すべての入力値は整数である。

## 入力

入力は標準入力から以下の形式で与えられる。

> $N$ $P$

## 出力

答えを出力せよ。

```input1
2 1005976817
```

```output1
1
```

```input2
5 1000837403
```

```output2
372
```

```input3
10 1001160547
```

```output3
789846604
```

```input4
20 1006779551
```

```output4
888612770
```