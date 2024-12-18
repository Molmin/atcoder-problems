配点 : $550$ 点

## 問題文

キーエンスは即納で有名です。

この問題において、暦は $1$ 日、 $2$ 日、 $3$ 日、 $\dots$ と続いています。

注文 $1,2,\dots,N$ があり、注文 $i$ は $T_i$ 日に発生することが分かっています。<br>
これらの注文に対し、以下のルールに従って出荷を行います。  

- 出荷は注文 $K$ 個分までまとめて行うことができる。
- 注文 $i$ は、 $T_i$ 日以降にしか出荷できない。
- 一度出荷すると、その出荷の $X$ 日後になるまで次の出荷が行えない。-   - すなわち、 $a$ 日に出荷を行った時、次の出荷ができるのは $a+X$ 日である。

注文から出荷までにかかった日数 $1$ 日につき、不満度が $1$ 蓄積します。<br>
すなわち、注文 $i$ が $S_i$ 日に出荷されたとき、その注文によって蓄積する不満度は $(S_i - T_i)$ です。

出荷するタイミングを上手く定めた時、全ての注文において蓄積した不満度の総和として達成可能な最小値を求めてください。

## 制約

- 入力は全て整数
- $1 \le K \le N \le 100$
- $1 \le X \le 10^9$
- $1 \le T_1 \le T_2 \le \dots \le T_N \le 10^{12}$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$ $X$
> 
> $T_1$ $T_2$ $\dots$ $T_N$

## 出力

答えを整数として出力せよ。

```input1
5 2 3
1 5 6 10 12
```

```output1
2
```

例えば、次の通り出荷することで不満度の総和を $2$ にすることができ、これが達成可能な最小です。

- 注文 $1$ を $1$ 日に出荷する。-   - これにより不満度は $(1-1) = 0$ 蓄積し、次の出荷ができるのは $4$ 日である。
- 注文 $2,3$ を $6$ 日に出荷する。-   - これにより不満度は $(6-5) + (6-6) = 1$ 蓄積し、次の出荷ができるのは $9$ 日である。
- 注文 $4$ を $10$ 日に出荷する。-   - これにより不満度は $(10-10)=0$ 蓄積し、次の出荷ができるのは $13$ 日である。
- 注文 $5$ を $13$ 日に出荷する。-   - これにより不満度は $(13-12)=1$ 蓄積し、次の出荷ができるのは $16$ 日である。

```input2
1 1 1000000000
1000000000000
```

```output2
0
```

```input3
15 4 5
1 3 3 6 6 6 10 10 10 10 15 15 15 15 15
```

```output3
35
```