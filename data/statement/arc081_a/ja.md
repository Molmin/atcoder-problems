配点 : $300$ 点

## 問題文

太さが無視できる棒が $N$ 本あります．
$i$ 番目の棒の長さは $A_i$ です．

すぬけ君は，これらの棒から $4$ 本の異なる棒を選び，それらの棒を辺として長方形（正方形を含む）を作りたいです．
作ることができる最大の長方形の面積を求めてください．

## 制約

- $4 \leq N \leq 10^5$
- $1 \leq A_i \leq 10^9$
- $A_i$ は整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $A_2$ ... $A_N$

## 出力

すぬけ君が作ることのできる最大の長方形の面積を出力せよ．
ただし，長方形を作れない場合は，$0$ を出力せよ．

```input1
6
3 1 2 4 2 1
```

```output1
2
```

$1 \times 2$ の長方形を作ることができます．

```input2
4
1 2 3 4
```

```output2
0
```

長方形を作ることはできません．

```input3
10
3 3 3 3 4 4 4 5 5 5
```

```output3
20
```