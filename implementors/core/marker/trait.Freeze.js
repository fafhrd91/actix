(function() {var implementors = {};
implementors["actix"] = [{"text":"impl Freeze for SpawnHandle","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Freeze for Addr&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;M&gt; Freeze for Recipient&lt;M&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Freeze for WeakAddr&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;M&gt; Freeze for WeakRecipient&lt;M&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Freeze for Context&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A, I&gt; Freeze for ActorResponse&lt;A, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, T&gt; Freeze for AtomicResponse&lt;A, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;M&gt; Freeze for MessageResult&lt;M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;M as Message&gt;::Result: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;I&gt; Freeze for Response&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Freeze for Supervisor&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for ActorState","synthetic":true,"types":[]},{"text":"impl Freeze for Running","synthetic":true,"types":[]},{"text":"impl Freeze for MailboxError","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Freeze for ContextParts&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A, C&gt; Freeze for ContextFut&lt;A, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for SendError&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Freeze for AddressSender&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Freeze for AddressReceiver&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Freeze for Envelope&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A, M&gt; !Freeze for Request&lt;A, M&gt;","synthetic":true,"types":[]},{"text":"impl&lt;M&gt; !Freeze for RecipientRequest&lt;M&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Freeze for Mailbox&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Mocker&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Resolve","synthetic":true,"types":[]},{"text":"impl Freeze for Connect","synthetic":true,"types":[]},{"text":"impl Freeze for ConnectAddr","synthetic":true,"types":[]},{"text":"impl Freeze for Resolver","synthetic":true,"types":[]},{"text":"impl !Freeze for TcpConnector","synthetic":true,"types":[]},{"text":"impl Freeze for ResolverError","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Freeze for Finish&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, F&gt; Freeze for Map&lt;A, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, A&gt; Freeze for Ready&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, E, A&gt; Freeze for FutureResult&lt;T, E, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Freeze for StreamFinish&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, F, Fut, T&gt; Freeze for StreamFold&lt;S, F, Fut, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Fut as IntoActorFuture&gt;::Future: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, F&gt; Freeze for StreamMap&lt;S, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, F, U&gt; Freeze for StreamThen&lt;S, F, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;U as IntoActorFuture&gt;::Future: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; !Freeze for StreamTimeout&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A, B, F&gt; Freeze for Then&lt;A, B, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;B as IntoActorFuture&gt;::Future: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; !Freeze for Timeout&lt;F&gt;","synthetic":true,"types":[]},{"text":"impl&lt;F, A&gt; Freeze for FutureWrap&lt;F, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, A&gt; Freeze for StreamWrap&lt;S, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, B&gt; Freeze for Either&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, E&gt; Freeze for Writer&lt;T, E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;I, T, U&gt; Freeze for FramedWrite&lt;I, T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;I, S&gt; Freeze for SinkWrite&lt;I, S&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Registry","synthetic":true,"types":[]},{"text":"impl Freeze for SystemRegistry","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Freeze for SyncArbiter&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Freeze for SyncContext&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Condition&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !Freeze for TimerFunc&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Freeze for IntervalFunc&lt;A&gt;","synthetic":true,"types":[]}];
implementors["actix_broker"] = [{"text":"impl Freeze for ArbiterBroker","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Broker&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for SystemBroker","synthetic":true,"types":[]}];
implementors["client"] = [{"text":"impl Freeze for ChatClient","synthetic":true,"types":[]},{"text":"impl Freeze for ClientCommand","synthetic":true,"types":[]},{"text":"impl Freeze for ChatCodec","synthetic":true,"types":[]},{"text":"impl Freeze for ClientChatCodec","synthetic":true,"types":[]},{"text":"impl Freeze for ChatRequest","synthetic":true,"types":[]},{"text":"impl Freeze for ChatResponse","synthetic":true,"types":[]}];
implementors["server"] = [{"text":"impl Freeze for Server","synthetic":true,"types":[]},{"text":"impl !Freeze for TcpConnect","synthetic":true,"types":[]},{"text":"impl Freeze for ChatCodec","synthetic":true,"types":[]},{"text":"impl Freeze for ClientChatCodec","synthetic":true,"types":[]},{"text":"impl Freeze for ChatRequest","synthetic":true,"types":[]},{"text":"impl Freeze for ChatResponse","synthetic":true,"types":[]},{"text":"impl Freeze for Connect","synthetic":true,"types":[]},{"text":"impl Freeze for Disconnect","synthetic":true,"types":[]},{"text":"impl Freeze for Message","synthetic":true,"types":[]},{"text":"impl Freeze for ListRooms","synthetic":true,"types":[]},{"text":"impl Freeze for Join","synthetic":true,"types":[]},{"text":"impl Freeze for ChatServer","synthetic":true,"types":[]},{"text":"impl Freeze for Message","synthetic":true,"types":[]},{"text":"impl Freeze for ChatSession","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()