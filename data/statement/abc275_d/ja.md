配点 : $400$ 点

## 問題文

非負整数 $x$ に対し定義される関数 $f(x)$ は以下の条件を満たします。

- $f(0) = 1$
- 任意の正整数 $k$ に対し $f(k) = f(\lfloor \frac{k}{2}\rfloor) + f(\lfloor \frac{k}{3}\rfloor)$

ここで、$\lfloor A \rfloor$ は $A$ の小数点以下を切り捨てた値を指します。  

このとき、 $f(N)$ を求めてください。

## 制約

- $N$ は $0 \le N \le 10^{18}$ を満たす整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$

## 出力

答えを出力せよ。

```input1
2
```

```output1
3
```

$f(2) = f(\lfloor \frac{2}{2}\rfloor) + f(\lfloor \frac{2}{3}\rfloor) = f(1) + f(0) =(f(\lfloor \frac{1}{2}\rfloor) + f(\lfloor \frac{1}{3}\rfloor)) + f(0) =(f(0)+f(0)) + f(0)= 3$ です。

```input2
0
```

```output2
1
```

```input3
100
```

```output3
55
```