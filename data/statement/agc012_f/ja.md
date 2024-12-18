配点 : $2000$ 点

## 問題文

すぬけくんは長さ $2N-1$ の数列 $a$ をもらいました。

すぬけくんは $a$ を自由に並び替えたあと、$a$ を使って新しい数列 $b$ を作りました。$b$ は以下に示されるような長さ $N$ の数列です。

- $b_1 = (a_1)$ の中央値
- $b_2 = (a_1, a_2, a_3)$ の中央値
- $b_3 = (a_1,a_2,a_3,a_4,a_5)$ の中央値
- $:$
- $b_N = (a_1,a_2,a_3, ..., a_{2N-1})$ の中央値

$b$ としてありうる数列の数を modulo $10^{9} + 7$ で求めてください。

## 制約

- $1 \leq N \leq 50$
- $1 \leq a_i \leq 2N-1$
- $a_i$ は整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $a_1$ $a_2$ $...$ $a_{2N-1}$

## 出力

答えを出力せよ。

```input1
2
1 3 2
```

```output1
3
```

$b$ としてありうる数列は $(1,2),(2,2),(3,2)$ の $3$ 通りです。これらはそれぞれ $(1,2,3),(2,1,3),(3,1,2)$ から作ることが可能です。

```input2
4
1 3 2 3 2 4 3
```

```output2
16
```

```input3
15
1 5 9 11 1 19 17 18 20 1 14 3 3 8 19 15 16 29 10 2 4 13 6 12 7 15 16 1 1
```

```output3
911828634
```

$10^{9} + 7$ で割ったあまりを求めてください。