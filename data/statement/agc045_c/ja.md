配点 : $800$ 点

## 問題文

すぬけくんは長さ $N$ の文字列 $x$ を持っています．
最初，$x$ のすべての文字は `0` です．

すぬけくんは，以下の $2$ 種類の操作を好きな順序で好きな回数行うことができます．

- $x$ の連続する $A$ 文字を選んで，それらをすべて `0` にする．
- $x$ の連続する $B$ 文字を選んで，それらをすべて `1` にする．

すぬけくんが操作を終えたあとの $x$ としてありうるものが何通りあるかを求めてください．
ただし答えは非常に大きくなることがあるので．$10^9+7$ で割ったあまりを求めてください．

## 制約

- $1 \leq N \leq 5000$
- $1 \leq A,B \leq N$
- 入力される値はすべて整数である．

## 入力

入力は以下の形式で標準入力から与えられる．

> $N$ $A$ $B$

## 出力

すぬけくんが操作を終えたあとの $x$ としてありうるものが何通りあるかを $10^9+7$ で割ったあまりを出力せよ．

```input1
4 2 3
```

```output1
11
```

例えば，$x=$`0011`,`1111` などはありえますが，$x=$`0110` はありえません．

```input2
10 7 2
```

```output2
533
```

```input3
1000 100 10
```

```output3
828178524
```