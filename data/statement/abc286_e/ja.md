配点 : $500$ 点

## 問題文

$N$ 個の都市があり、いくつかの相異なる都市の間は一方通行の直行便によって移動することができます。<br>
どの直行便が存在するかは $N$ 個の長さ $N$ の文字列 $S_1,S_2,\ldots,S_N$ によって表され、
$S_i$ の $j$ 文字目が `Y` のとき都市 $i$ から都市 $j$ へ向かう直行便が存在することを、
`N` のとき存在しないことを示します。<br>
また、各都市ではお土産が $1$ つずつ売られており、都市 $i$ では価値 $A_i$ のお土産が売られています。

次のような問題を考えます。

高橋君は今都市 $S$ におり、いくつかの直行便を乗り継いで($S$ とは異なる)都市 $T$ に向かおうとしています。<br>
さらに、高橋君は移動する途中で訪れた都市($S,T$ を含む)において $1$ つずつお土産を購入します。<br>
都市 $S$ から都市 $T$ へ向かう経路が複数存在する時、高橋君は次のような経路で移動することを考えています。

- 都市 $S$ から 都市 $T$ に向かう経路のうち、使う直行便の数が最小である。
- さらにそのような経路のうち、購入するお土産の価値の総和が最大である。

高橋君が都市 $S$ から $T$ に直行便を乗り継いで移動することが可能か判定し、
可能な時は高橋君が上の条件をみたすように経路を選んだ時の「使用する直行便の本数」と「お土産の価値の総和」を求めよ。

相異なる都市の組 $(U_i,V_i)$ が $Q$ 個与えられます。<br>
各 $1\leq i\leq Q$ について、$S=U_i, T=V_i$ とした時の上記の問題の答えを出力してください。

## 制約

- $2 \leq N \leq 300$
- $1\leq A_i\leq 10^9$
- $S_i$ は `Y` と `N` のみからなる長さ $N$ の文字列
- $S_i$ の $i$ 文字目は `N`
- $1\leq Q\leq N(N-1)$
- $1\leq U_i,V_i\leq N$
- $U_i\neq V_i$
- $i\neq j$ ならば $(U_i,V_i)\neq (U_j,V_J)$
- $N,A_i,Q,U_i,V_i$ は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$
> 
> $Q$
> 
> $U_1$ $V_1$
> 
> $U_2$ $V_2$
> 
> $\vdots$
> 
> $U_Q$ $V_Q$

## 出力

$Q$ 行出力せよ。<br>
$i$ $(1\leq i\leq Q)$ 行目には、
都市 $U_i$ から都市 $V_i$ に移動することが不可能な時は `Impossible` を、
可能な時は上記のように経路を選んだ時の「使用する直行便の本数」と「お土産の価値の総和」をこの順に空白区切りで出力せよ。

```input1
5
30 50 70 20 60
NYYNN
NNYNN
NNNYY
YNNNN
YNNNN
3
1 3
3 1
4 5
```

```output1
1 100
2 160
3 180
```

$(S,T)=(U_1,V_1)=(1,3)$ の時について、都市 $1$ から都市 $3$ への直行便が存在するため、
使用する直行便としてあり得る最小の値はその直行便を使用した時の $1$ 本となります。
この時、お土産の価値の総和は $A_1+A_3=30+70=100$ となります。

$(S,T)=(U_2,V_2)=(3,1)$ の時について、使用する直行便としてあり得る最小の値は $2$ 本で、
最小値を達成する経路としては都市 $3\to 4\to 1$ と都市 $3\to 5\to 1$ の $2$ 通りが考えられます。
それぞれの経路の時のお土産の価値の総和は $70+20+30=120$, $70+60+30=160$ なので、
高橋君は後者の経路を選び、この時お土産の価値の総和は $160$ となります。

$(S,T)=(U_3,V_3)=(4,5)$ の時について、都市 $4\to 1\to 3\to 5$ と進んだ時に使用する直行便の本数は最小となり、
この時お土産の価値の総和は $20+30+70+60=180$ となります。

```input2
2
100 100
NN
NN
1
1 2
```

```output2
Impossible
```

直行便が全く存在しないこともあります。