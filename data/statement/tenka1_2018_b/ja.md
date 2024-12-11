配点 : $200$ 点

## 問題文

高橋君は最初 $A$ 枚、青木君は最初 $B$ 枚のクッキーを持っています。
二人は、高橋君からはじめて交互に、以下の操作を繰り返します。

- 自分が持っているクッキーの枚数が奇数なら、自分が持っているクッキーを $1$ 枚食べ、偶数なら何もしない。その後、自分が持っているクッキーの半分を相手に渡す。

合計 $K$ 回の操作を行った後の、高橋君と青木君が持っているクッキーの枚数をそれぞれ求めてください。

## 制約

- $1 \leq A,B \leq 10^9$
- $1 \leq K \leq 100$
- $A,B,K$ は整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $A$ $B$ $K$

## 出力

合計 $K$ 回の操作を行った後の、高橋君と青木君が持っているクッキーの枚数を順に出力せよ。

```input1
5 4 2
```

```output1
5 3
```

以下のように操作は進みます。

- 最初、高橋君と青木君はそれぞれ $5,4$ 枚のクッキーを持っている。
- 高橋君はクッキーを $1$ 枚食べ、青木君に $2$ 枚のクッキーを渡す。操作後、二人はそれぞれ $2,6$ 枚のクッキーを持っている。
- 青木君は高橋君に $3$ 枚のクッキーを渡す。二人はそれぞれ $5,3$ 枚のクッキーを持っている。

```input2
3 3 3
```

```output2
1 3
```

```input3
314159265 358979323 84
```

```output3
448759046 224379523
```