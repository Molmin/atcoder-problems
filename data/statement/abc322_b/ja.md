配点 : $200$ 点

## 問題文

英小文字からなる文字列 $S, T$ が与えられます。$S$ の長さは $N$、$T$ の長さは $M$ です。($N \leq M$ が制約で保証されています)

$S$ が $T$ の **接頭辞** であるとは、$T$ のはじめ $N$ 文字からなる文字列が $S$ と一致することを言います。<br>
$S$ が $T$ の **接尾辞** であるとは、$T$ の後ろ $N$ 文字からなる文字列が $S$ と一致することを言います。

$S$ が $T$ の接頭辞であり、かつ接尾辞でもある場合は $0$ を、<br>
$S$ が $T$ の接頭辞であるが、接尾辞でない場合は $1$ を、<br>
$S$ が $T$ の接尾辞であるが、接頭辞でない場合は $2$ を、<br>
$S$ が $T$ の接頭辞でも接尾辞でもない場合は $3$ を出力してください。  

## 制約

- $1 \leq N \leq M \leq 100$
- $S$ は英小文字からなる長さ $N$ の文字列
- $T$ は英小文字からなる長さ $M$ の文字列

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $S$
> 
> $T$

## 出力

問題文の指示に従って答えを出力せよ。

```input1
3 7
abc
abcdefg
```

```output1
1
```

$S$ は $T$ の接頭辞ですが接尾辞ではありません。よって $1$ を出力します。

```input2
3 4
abc
aabc
```

```output2
2
```

$S$ は $T$ の接尾辞ですが接頭辞ではありません。

```input3
3 3
abc
xyz
```

```output3
3
```

$S$ は $T$ の接頭辞でも接尾辞でもありません。

```input4
3 3
aaa
aaa
```

```output4
0
```

$S$ と $T$ が完全に一致する場合もあります。この場合、$S$ は $T$ の接頭辞であり、かつ接尾辞でもあります。