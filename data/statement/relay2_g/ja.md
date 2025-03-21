配点 : $100$ 点

## 問題文

英小文字からなる二つの文字列 $s,$ $t$ と整数 $L$ が与えられます。

$s,$ $t$ を任意の順に一個以上並べて長さ $L$ の文字列を生成することを考えます。このとき、同じ文字列を複数回用いることもできます。

例えば、$s =$ `at`$,$ $t =$ `code`$,$ $L = 6$ のとき、文字列 `atatat`$,$ `atcode`$,$ `codeat` を生成することができます。

このようにして生成される長さ $L$ の文字列のうち、辞書順最小のものを求めてください。なお、入力として与えられるケースでは、長さ $L$ の文字列を生成することは必ず可能です。

## 制約

- $1 \leq L \leq 2 \times 10^5$
- $1 \leq |s|, |t| \leq L$
- $s,$ $t$ は英小文字からなる。
- 問題文で述べた方法で、$s,$ $t$ から長さ $L$ の文字列を生成することが可能である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $L$
> 
> $s$
> 
> $t$

## 出力

問題文で述べた方法で生成される長さ $L$ の文字列のうち、辞書順最小のものを出力せよ。

```input1
6
at
code
```

```output1
atatat
```

この入力は問題文中で示した例に対応します。

```input2
8
coding
festival
```

```output2
festival
```

$s,$ $t$ のうち一方が長さ $L$ の文字列を生成する上でまったく役に立たないことがあります。

```input3
8
same
same
```

```output3
samesame
```

$s = t$ であることもあります。

```input4
10
coin
age
```

```output4
ageagecoin
```