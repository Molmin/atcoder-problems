配点 : $300$ 点

## 問題文

正整数 $N, M$ が与えられます。$\lfloor \frac{10^N}{M} \rfloor$ を $M$ で割った余りを求めてください。

 $\lfloor x \rfloor$ について
$\lfloor x \rfloor$ は、 $x$ を超えない最大の整数を表します。例としては次のようになります。

- $\lfloor 2.5 \rfloor = 2$
- $\lfloor 3 \rfloor = 3$
- $\lfloor 9.9999999 \rfloor = 9$
- $\lfloor \frac{100}{3} \rfloor = \lfloor 33.33... \rfloor = 33$

## 制約

- $1 \leq N \leq 10^{18}$
- $1 \leq M \leq 10000$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$

## 出力

答えを出力せよ。

```input1
1 2
```

```output1
1
```

$\lfloor \frac{10^1}{2} \rfloor = 5$ なので、$5$ を $2$ で割った余りの $1$ を出力します。

```input2
2 7
```

```output2
0
```

```input3
1000000000000000000 9997
```

```output3
9015
```