配点 : $500$ 点

## 問題文

非負整数列 $A = (A_1, \ldots, A_N)$ が与えられます。
あなたは次の操作を、何度でも行うことができます（一度も行わなくてもよいです）。

- 非負整数 $x\in \{A_1,\ldots,A_N\}$ をひとつ選ぶ。
- すべての $i$ に対して、$A_i$ を $A_i\oplus x$ に置き換える（$\oplus$ はビット単位 $\mathrm{XOR}$ 演算を表します）。

操作後の $\sum_{i=1}^N A_i$ としてありうる最大値を求めてください。

    
        ビット単位 $\mathrm{XOR}$ 演算とは
    
    

        非負整数 $A, B$ のビット単位 $\mathrm{XOR}$ 、$A \oplus B$ は、以下のように定義されます。
        

- $A \oplus B$ を二進表記した際の $2^k$ ($k \geq 0$) の位の数は、$A, B$ を二進表記した際の $2^k$ の位の数のうち一方のみが $1$ であれば $1$、そうでなければ $0$ である。

        例えば、$3 \oplus 5 = 6$ となります (二進表記すると: $011 \oplus 101 = 110$)。
    

## 制約

- $1\leq N \leq 3\times 10^{5}$
- $0\leq A_i &lt; 2^{30}$

## 入力

入力は以下の形式で標準入力から与えられます。

> $N$
> 
> $A_1$ $\ldots$ $A_N$

## 出力

操作後の $\sum_{i=1}^N A_i$ としてありうる最大値を出力してください。

```input1
5
1 2 3 4 5
```

```output1
19
```

例えば次のように操作を行うことで、$\sum_{i=1}^N A_i$ を $19$ にすることが可能です。

- はじめ、数列 $A$ は次の状態です：$(1,2,3,4,5)$。
- $x = 1$ として操作を行うと、数列 $A$ は次の状態に変化します：$(0,3,2,5,4)$。
- $x = 5$ として操作を行うと、数列 $A$ は次の状態に変化します：$(5,6,7,0,1)$。このとき $\sum_{i=1}^N A_i = 5 + 6 + 7 + 0 + 1 = 19$ です。

```input2
5
10 10 10 10 10
```

```output2
50
```

操作を一度も行わないことで、$\sum_{i=1}^N A_i$ を $50$ にすることが可能です。

```input3
5
3 1 4 1 5
```

```output3
18
```