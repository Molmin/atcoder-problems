配点 : $700$ 点

## 問題文

宝石が $N$ 個あり，それぞれ $1, 2, ..., N$ と数が書かれています。

あなたは，以下の操作を好きなだけ行うことが出来ます(一度も行わなくてもよいです)。

- 正整数 $x$ を選ぶ。$x$ の倍数が書かれた宝石を全て叩き割る。

そして，$i$ が書かれていた宝石が割られずに残っていた場合，$a_i$ 円貰います。
ただし，この $a_i$ は負の場合もあり，その場合はお金を払わなくてはいけません。

うまく操作を行った時，あなたは最大で何円お金を貰えるでしょうか？

## 制約

- 入力は全て整数
- $1 \leq N \leq 100$
- $|a_i| \leq 10^9$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $a_1$ $a_2$ $...$ $a_N$

## 出力

貰えるお金の最大値を出力してください。

```input1
6
1 2 -6 4 5 3
```

```output1
12
```

宝石 $3, 6$ を叩き割るのが最適です。

```input2
6
100 -100 -100 -100 100 -100
```

```output2
200
```

```input3
5
-1 -2 -3 -4 -5
```

```output3
0
```

全ての宝石を叩き割るのが最適です。

```input4
2
-1000 100000
```

```output4
99000
```