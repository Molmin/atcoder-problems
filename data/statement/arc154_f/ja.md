配点 : $900$ 点

## 問題文

全ての目が出る確率が等しい $N$ 面サイコロがあります。このサイコロを、全ての目が出るまで振り続けます。

$1 \le i \le M$ を満たす整数 $i$ に対して、サイコロを振る回数の $i$ 乗の期待値 $\bmod\ 998244353$ を求めてください。

    
        期待値 $\bmod\ 998244353$ の定義
    
    

        求める期待値は必ず有理数になることが証明できます。また、この問題の制約のもとでは、その値を既約分数 $\frac{P}{Q}$ で表した時、$Q \neq 0 \pmod{998244353}$ となることも証明できます。よって、$R \times Q = P \pmod{998244353},0 \le R &lt; 998244353$ を満たす整数 $R$ が一意に定まります。この $R$ を答えてください。
    

## 制約

- $1 \le N,M \le 2 \times 10^5$
- 入力は全て整数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$

## 出力

$M$ 行出力せよ。

$i$ 行目には、サイコロを振る回数の $i$ 乗の期待値 $\bmod\ 998244353$ を出力せよ。

```input1
3 3
```

```output1
499122182
37
748683574
```

$i=1$ の場合、求めるべき期待値は全ての目が出るまでの操作回数です。その値は $\frac{11}{2}$ です。

```input2
7 8
```

```output2
449209977
705980975
631316005
119321168
62397541
596241562
584585746
378338599
```

```input3
2023 7
```

```output3
442614988
884066164
757979000
548628857
593993207
780067557
524115712
```