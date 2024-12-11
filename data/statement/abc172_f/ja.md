配点 : $600$ 点

## 問題文

石の山が $N$ 個あり、$i$ 番目の山には $A_i$ 個の石があります。

これを使って青木君と高橋君が次のようなゲームをしようとしています。

- 青木君から交互に、次の操作を繰り返す-   - 操作：石の山を $1$ つ選び、そこから $1$ 個以上の石を取り除く
- 先に操作ができなくなった方の負け

このゲームは、両者が最適に行動する場合、ゲーム開始時の各山の石の個数のみによって、先手必勝か後手必勝かが決まります。

そこで高橋君は、ゲームを始める前に、 $1$ 番目の山から $0$ 個以上 $A_1$ 個未満の石を $2$ 番目の山に移すことで、後手の高橋君が必勝となるようにしようとしています。

そのようなことが可能なら移動する石の個数の最小値を、不可能ならかわりに `-1` を出力してください。

## 制約

- $2 \leq N \leq 300$
- $1 \leq A_i \leq 10^{12}$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $\ldots$ $A_N$

## 出力

移動する石の個数の最小値を出力せよ。不可能ならかわりに `-1` を出力せよ。

```input1
2
5 3
```

```output1
1
```

石の移動をしなかった場合、青木君が最初に $1$ 番目の山から $2$ 個の石を取り除くと、高橋君はその後どのように行動しても負けてしまいます。

ゲームを始める前に $1$ 番目の山から $1$ 個の石を移動して、石の個数を $4,4$ とした場合、適切な行動を取ることで、高橋君は必ず勝つことができます。

```input2
2
3 5
```

```output2
-1
```

$2$ 番目の山から $1$ 番目の山へ石を移すことはできません。

```input3
3
1 1 2
```

```output3
-1
```

$1$ 番目の山のすべての石を移すことはできません。

```input4
8
10 9 8 7 6 5 4 3
```

```output4
3
```

```input5
3
4294967297 8589934593 12884901890
```

```output5
1
```

オーバーフローに注意してください。