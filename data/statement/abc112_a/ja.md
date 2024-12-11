配点: $100$ 点

## 問題文

$2020$ 年, AtCoder 社は年商 $10$ 億円を超え, プログラミング教育にも手を出すようになった.<br>
ある日行われたテストでは, $1$ 才児は `Hello World` を出力するプログラムを, $2$ 才児は整数 $A$, $B$ を入力して $A+B$ を出力するプログラムを書かなければならない.<br>
高橋君はこのテストを受けているが, 突然自分が何才なのかが分からなくなってしまった.<br>
そこで, 最初に自分の年齢 $N$ ($N$ は $1$ または $2$) を入力し, $N=1$ ならば `Hello World` と出力し, $N=2$ ならば $A$, $B$ を入力して $A+B$ を出力するプログラムを作ることにした.<br>
高橋君に代わって, このようなプログラムを作りなさい.  

## 制約

- $N$ は $1$ または $2$
- $A$ は $1$ 以上 $9$ 以下の整数
- $B$ は $1$ 以上 $9$ 以下の整数

## 入力

入力は以下の 2 つのうちいずれかの形式で標準入力から与えられる.  

> 1

> 2
> 
> $A$
> 
> $B$

## 出力

$N=1$ のとき, `Hello World` と出力し, $N=2$ のとき, $A+B$ を出力しなさい.  

```input1
1
```

```output1
Hello World
```

$N=1$ なので, 高橋君は $1$ 才である. したがって, `Hello World` を出力する.  

```input2
2
3
5
```

```output2
8
```

$N=2$ なので, 高橋君は $2$ 才である. $A=3, B=5$ なので, $A+B$ である $8$ を出力する.