配点 : $575$ 点

## 問題文

$(1,2,\dots,N)$ の順列 $P=(P_1,P_2,\dots,P_N)$ のうち、以下の条件を満たすものの個数を $998244353$ で割ったあまりを求めてください。

- $1 \le i \le N$ を満たす全ての整数 $i$ に対して、$|P_i - i| \ge X$ である。

## 制約

- $1 \le N \le 100$
- $1 \le X \le 5$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $X$

## 出力

答えを出力せよ。

```input1
3 1
```

```output1
2
```

条件を満たす順列 $P=(P_1,P_2,P_3)$ は、$(2,3,1),(3,1,2)$ の $2$ 個です。よって答えは $2$ です。

```input2
5 2
```

```output2
4
```

```input3
98 5
```

```output3
809422418
```