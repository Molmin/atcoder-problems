配点 : $200$ 点

## 問題文

非負整数 $A,B,C,D,E,F$ があり、$A\times B\times C\geq D\times E\times F$ をみたしています。<br>
$(A\times B\times C)-(D\times E\times F)$ の値を $998244353$ で割った余りを求めてください。

## 制約

- $0\leq A,B,C,D,E,F\leq 10^{18}$
- $A\times B\times C\geq D\times E\times F$
- $A,B,C,D,E,F$ は整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $A$ $B$ $C$ $D$ $E$ $F$

## 出力

$(A\times B\times C)-(D\times E\times F)$ を $998244353$ で割った余りを整数で出力せよ。  

```input1
2 3 5 1 2 4
```

```output1
22
```

$A\times B\times C=2\times 3\times 5=30$, $D\times E\times F=1\times 2\times 4=8$ より、<br>
$(A\times B\times C)-(D\times E\times F)=22$ であり、これを $998244353$ で割った余りである $22$ を出力します。

```input2
1 1 1000000000 0 0 0
```

```output2
1755647
```

$A\times B\times C=1000000000$, $D\times E\times F=0$ より、<br>
$(A\times B\times C)-(D\times E\times F)=1000000000$ であり、これを $998244353$ で割った余りである $1755647$ を出力します。

```input3
1000000000000000000 1000000000000000000 1000000000000000000 1000000000000000000 1000000000000000000 1000000000000000000
```

```output3
0
```

$(A\times B\times C)-(D\times E\times F)=0$ であり、これを $998244353$ で割った余りである $0$ を出力します。