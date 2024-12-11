配点 : $200$ 点

## 問題文

整数 $a,b,c,d$ が与えられます。
$a \leq x \leq b, c\leq y \leq d$ を満たす整数 $x,y$ について、$x \times y$ の最大値はいくつですか。

## 制約

- $-10^9 \leq a \leq b \leq 10^9$
- $-10^9 \leq c \leq d \leq 10^9$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $a$ $b$ $c$ $d$

## 出力

答えを出力せよ。

```input1
1 2 1 1
```

```output1
2
```

$x=1,y=1$ のとき $x \times y=1$、$x=2,y=1$ のとき $x \times y=2$ であるため、答えは $2$ です。

```input2
3 5 -4 -2
```

```output2
-6
```

答えが負になることもあります。

```input3
-1000000000 0 -1000000000 0
```

```output3
1000000000000000000
```