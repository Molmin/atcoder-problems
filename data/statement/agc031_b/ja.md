配点 : $700$ 点

## 問題文

$N$ 個の石が一列に並んでいて、左から $i$ 個目の石は色 $C_i$ で塗られています。

すぬけ君は、以下の操作を $0$ 回以上の任意の回数行います。

- 同じ色で塗られている $2$ つの石を選ぶ。それらの石の間に置かれている石をすべて、選んだ石と同じ色で塗りかえる。

最終的な石の色の列としてありうるものの個数を $10^9+7$ で割ったあまりを求めてください。

## 制約

- $1 \leq N \leq 2\times 10^5$
- $1 \leq C_i \leq 2\times 10^5(1\leq i\leq N)$
- 入力はすべて整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $C_1$
> 
> $:$
> 
> $C_N$

## 出力

最終的な石の色の列としてありうるものの個数を $10^9+7$ で割ったあまりを出力せよ。

```input1
5
1
2
1
2
2
```

```output1
3
```

以下の $3$ 通りの石の色の列を作ることができます。

- 操作を行わないことで、$(1,2,1,2,2)$
- $1,3$ 番目の石を選んで操作を行うことで、$(1,1,1,2,2)$
- $2,4$ 番目の石を選んで操作を行うことで、$(1,2,2,2,2)$

```input2
6
4
2
5
4
2
4
```

```output2
5
```

```input3
7
1
3
1
2
3
3
2
```

```output3
5
```