配点 : $100$ 点

## 問題文

K 市には、東西方向に $n$ 本の通りがあり、南北方向に $m$ 本の通りがあります。
東西方向のそれぞれの通りは、南北方向のそれぞれの通りと交わっています。
東西南北を通りに囲まれた最小の領域を「街区」と呼びます。
K 市にある街区の個数を求めてください。

## 制約

- $2 \leq n, m \leq 100$

## 入力

入力は以下の形式で標準入力から与えられる。

> $n$ $m$

## 出力

K 市にある街区の個数を出力せよ。

```input1
3 4
```

```output1
6
```

次図の $6$ 個です。

![9179be829dc9810539213537d4c7398c.png](https://atcoder.jp/img/abc069/9179be829dc9810539213537d4c7398c.png)

```input2
2 2
```

```output2
1
```

次図の $1$ 個です。

![997bfafa99be630b54d037225a5c68ea.png](https://atcoder.jp/img/abc069/997bfafa99be630b54d037225a5c68ea.png)