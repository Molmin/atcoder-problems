配点 : $400$ 点

## 問題文

整数 $N$ が与えられるので、以下の条件を全て満たす最小の整数 $X$ を求めてください。

- $X$ は $N$ 以上である。
- 非負整数 $(a,b)$ の組であって、 $X=a^3+a^2b+ab^2+b^3$ を満たすようなものが存在する。

## 制約

- $N$ は整数
- $0 \le N \le 10^{18}$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$

## 出力

答えを整数として出力せよ。

```input1
9
```

```output1
15
```

$9 \le X \le 14$ であるようなどの整数 $X$ についても、問題文中の条件を満たすような $(a,b)$ は存在しません。<br>
$X=15$ は $(a,b)=(2,1)$ とすると問題文中の条件を満たします。

```input2
0
```

```output2
0
```

$N$ 自身が条件を満たすこともあります。

```input3
999999999989449206
```

```output3
1000000000000000000
```

入出力が $32$bit 整数型に収まらない場合があります。