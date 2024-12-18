配点 : $400$ 点

## 問題文

$N$ 個のレンガが横一列に並んでいます。

左から $i \sim (1 \leq i \leq N)$ 番目のレンガには、整数 $a_i$ が書かれています。

あなたはこのうち $N - 1$ 個以下の任意のレンガを選んで砕くことができます。

その結果、$K$ 個のレンガが残っているとします。このとき、任意の整数 $i \sim (1 \leq i \leq K)$ について、残っているレンガの中で左から $i$ 番目のものに書かれた整数が $i$ であるとき、すぬけさんは満足します。

すぬけさんが満足するために砕く必要のあるレンガの最小個数を出力してください。もし、どのように砕いてもそれが不可能な場合、代わりに `-1` を出力してください。

## 制約

- 入力は全て整数である。
- $1 \leq N \leq 200000$
- $1 \leq a_i \leq N$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $a_1$ $a_2$ $...$ $a_N$

## 出力

すぬけさんが満足するために砕く必要のあるレンガの最小個数を出力せよ。もし、どのように砕いてもそれが不可能な場合、代わりに `-1` を出力せよ。

```input1
3
2 1 2
```

```output1
1
```

一番左のレンガ $1$ 個を砕くと、残ったレンガに書かれた整数は左から $1$, $2$ となります。

このとき、すぬけさんは満足します。

```input2
3
2 2 2
```

```output2
-1
```

この場合、すぬけさんが満足するレンガの砕き方は存在しません。

```input3
10
3 1 4 1 5 9 2 6 5 3
```

```output3
7
```

```input4
1
1
```

```output4
0
```

レンガを $1$ つも砕かなくていい場合もあります。