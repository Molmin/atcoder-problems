配点 : $100$ 点

## 問題文

太郎君と次郎君が次のゲームで勝負します。

最初に、数列 $a = (a_1, a_2, \ldots, a_N)$ が与えられます。
$a$ が空になるまで、二人は次の操作を交互に行います。
先手は太郎君です。

- $a$ の先頭要素または末尾要素を取り除く。 取り除いた要素を $x$ とすると、操作を行った人は $x$ 点を得る。

ゲーム終了時の太郎君の総得点を $X$、次郎君の総得点を $Y$ とします。
太郎君は $X - Y$ を最大化しようとし、次郎君は $X - Y$ を最小化しようとします。

二人が最適に行動すると仮定したとき、$X - Y$ を求めてください。

## 制約

- 入力はすべて整数である。
- $1 \leq N \leq 3000$
- $1 \leq a_i \leq 10^9$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $a_1$ $a_2$ $\ldots$ $a_N$

## 出力

二人が最適に行動すると仮定したとき、$X - Y$ を出力せよ。

```input1
4
10 80 90 30
```

```output1
10
```

二人が最適に行動すると、次のように操作が行われます。
操作対象の要素を太字で表しています。

- 先手: (10, 80, 90, **30**) → (10, 80, 90)
- 後手: (10, 80, **90**) → (10, 80)
- 先手: (10, **80**) → (10)
- 後手: (**10**) → ()

このとき、$X = 30 + 80 = 110$, $Y = 90 + 10 = 100$ となります。

```input2
3
10 100 10
```

```output2
-80
```

二人が最適に行動すると、例えば次のように操作が行われます。

- 先手: (**10**, 100, 10) → (100, 10)
- 後手: (**100**, 10) → (10)
- 先手: (**10**) → ()

このとき、$X = 10 + 10 = 20$, $Y = 100$ となります。

```input3
1
10
```

```output3
10
```

```input4
10
1000000000 1 1000000000 1 1000000000 1 1000000000 1 1000000000 1
```

```output4
4999999995
```

答えは 32-bit 整数型に収まらない場合があります。

```input5
6
4 2 9 7 1 5
```

```output5
2
```

二人が最適に行動すると、例えば次のように操作が行われます。

- 先手: (4, 2, 9, 7, 1, **5**) → (4, 2, 9, 7, 1)
- 後手: (**4**, 2, 9, 7, 1) → (2, 9, 7, 1)
- 先手: (2, 9, 7, **1**) → (2, 9, 7)
- 後手: (2, 9, **7**) → (2, 9)
- 先手: (2, **9**) → (2)
- 後手: (**2**) → ()

このとき、$X = 5 + 1 + 9 = 15$, $Y = 4 + 7 + 2 = 13$ となります。