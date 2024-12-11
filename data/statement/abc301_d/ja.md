配点 : $400$ 点

## 問題文

`0`, `1`, `?` からなる文字列 $S$ および整数 $N$ が与えられます。
$S$ に含まれる `?` をそれぞれ `0` または `1` に置き換えて $2$ 進整数とみなしたときに得られる値の集合を $T$ とします。
たとえば、$S=$ `?0?` のとき、
$T=\lbrace 000_{(2)},001_{(2)},100_{(2)},101_{(2)}\rbrace=\lbrace 0,1,4,5\rbrace$ です。

$T$ に含まれる $N$ 以下の値のうち最大のものを ($10$ 進整数として) 出力してください。
$N$ 以下の値が $T$ に含まれない場合は、代わりに `-1` を出力してください。

## 制約

- $S$ は `0`, `1`, `?` からなる文字列
- $S$ の長さは $1$ 以上 $60$ 以下
- $1\leq N \leq 10^{18}$
- $N$ は整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $S$
> 
> $N$

## 出力

答えを出力せよ。

```input1
?0?
2
```

```output1
1
```

問題文中で例示したとおり、$T=\lbrace 0,1,4,5\rbrace$ です。
$T$ に含まれる $N$ 以下の値は $0$ と $1$ なので、そのうちの最大である $1$ を出力します。

```input2
101
4
```

```output2
-1
```

$T=\lbrace 5\rbrace$ であるため、$N$ 以下の値は $T$ に含まれません。

```input3
?0?
1000000000000000000
```

```output3
5
```